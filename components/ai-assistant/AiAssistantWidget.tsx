"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Minus,
  MessageSquareQuote,
  CheckCircle2,
  Calendar,
  Sparkles,
  Zap,
  Rocket,
  Briefcase,
  Bot,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AiMascotLottie from "./AiMascotLottie";

interface Message {
  id: string;
  sender: "user" | "agent";
  text: string;
  timestamp: string;
  toolCall?: {
    tool: string;
    args?: any;
  };
}

const STARTER_PROMPTS = [
  {
    icon: Zap,
    text: "What is Anthic's core tech stack?",
  },
  {
    icon: Rocket,
    text: "Explain the EasyFile Tax project",
  },
  {
    icon: Briefcase,
    text: "What was his role at The Nexgenix?",
  },
  {
    icon: Calendar,
    text: "How can I schedule an interview?",
  },
];

const API_BASE = process.env.NEXT_PUBLIC_AI_AGENT_API_URL || "http://localhost:4000";

export default function AiAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [inputText, setInputText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "agent",
      text: "Hello! I am Anthic's personal AI Assistant. Ask me anything about his technical stack, project architectures, or let's connect!",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatCardRef = useRef<HTMLDivElement>(null);

  // 1. Initialize persistent Session ID & Referral Tracking on mount
  useEffect(() => {
    let sid = localStorage.getItem("anthic_ai_session_id");
    if (!sid) {
      sid = "session_" + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      localStorage.setItem("anthic_ai_session_id", sid);
    }
    setSessionId(sid);

    // Track ?ref= campaign if present
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) {
      fetch(`${API_BASE}/api/track`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ref,
          referrer: document.referrer || null,
          userAgent: navigator.userAgent,
        }),
      }).catch((err) => console.warn("[TRACK] Failed to log visit:", err));
    }
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isStreaming, activeTool]);

  // Handle "Excited Jump & Pop-up"
  const handleOpen = () => {
    setIsJumping(true);
    setShowBubble(false);

    setTimeout(() => {
      setIsOpen(true);
      setIsJumping(false);
    }, 280);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setShowBubble(true), 400);
  };

  // 2. Real SSE Chat Streaming API Handler
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isStreaming) return;

    // Hide suggestions once user has interacted
    setShowSuggestions(false);

    const userMsgId = Date.now().toString();
    const assistantMsgId = (Date.now() + 1).toString();

    // Append user message and placeholder for assistant
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        sender: "user",
        text,
        timestamp: "Just now",
      },
      {
        id: assistantMsgId,
        sender: "agent",
        text: "",
        timestamp: "Just now",
      },
    ]);

    setInputText("");
    setIsStreaming(true);
    setActiveTool(null);

    try {
      const response = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        },
        body: JSON.stringify({
          message: text,
          sessionId: sessionId || "default-session",
        }),
      });

      if (!response.ok) {
        throw new Error(`Server status: ${response.status}`);
      }

      if (!response.body) {
        throw new Error("No response stream available.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const rawChunk = decoder.decode(value, { stream: true });
        const lines = rawChunk.split("\n");

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;

          const jsonPayload = trimmed.replace(/^data:\s*/, "");
          if (!jsonPayload) continue;

          try {
            const data = JSON.parse(jsonPayload);

            // Handle Tool Call Events
            if (data.type === "tool_call") {
              setActiveTool(data.tool);
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantMsgId
                    ? { ...m, toolCall: { tool: data.tool, args: data.args } }
                    : m
                )
              );
            }

            // Handle Text Streaming Chunks
            if (data.text) {
              accumulatedText += data.text;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantMsgId ? { ...m, text: accumulatedText } : m
                )
              );
            }

            // Handle Stream Finished
            if (data.done) {
              setActiveTool(null);
            }

            // Handle Stream Error
            if (data.error) {
              accumulatedText += `\n[Notice: ${data.error}]`;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantMsgId ? { ...m, text: accumulatedText } : m
                )
              );
            }
          } catch {
            // Ignore non-json lines
          }
        }
      }
    } catch (err: any) {
      console.error("[AGENT ERROR] SSE Chat streaming error:", err);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMsgId
            ? {
                ...m,
                text: "I am having difficulty connecting to Anthic's AI node at the moment. Please feel free to reach out to Anthic directly via email at anthickumarsingh2@gmail.com!",
              }
            : m
        )
      );
    } finally {
      setIsStreaming(false);
      setActiveTool(null);
    }
  };

  // Pre-process text to remove awkward raw HTML <br> tags and format nicely for Markdown
  const cleanMarkdownText = (raw: string) => {
    return raw
      .replace(/<br\s*\/?>/gi, "\n\n")
      .replace(/&nbsp;/gi, " ");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* ── 1. CLOSED STATE: FLOATING MASCOT & SPEECH BUBBLE ── */}
      {!isOpen && (
        <div className="relative flex flex-col items-end">
          {/* Floating Speech Bubble */}
          {showBubble && (
            <div
              onClick={handleOpen}
              className="group mb-2 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="relative bg-[#ffffff] text-[#141416] px-4 py-2 rounded-2xl shadow-xl border border-[#141416]/10 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                </span>
                <Bot size={16} className="text-[#2250F4] shrink-0" />
                <span className="font-caveat text-xl font-bold tracking-wide text-[#141416]">
                  Ask Anthic&apos;s AI
                </span>
                <span className="text-xs bg-[#10b981]/10 text-[#059669] font-bold px-2 py-0.5 rounded-full">
                  Online
                </span>

                {/* Bubble tail */}
                <div className="absolute -bottom-1.5 right-7 w-3 h-3 bg-white border-r border-b border-[#141416]/10 rotate-45"></div>
              </div>
            </div>
          )}

          {/* Wumpus Mascot Button */}
          <button
            onClick={handleOpen}
            aria-label="Open AI Assistant"
            className={`relative group cursor-pointer transition-transform duration-300 ${
              isJumping
                ? "-translate-y-7 scale-110 rotate-6"
                : "hover:-translate-y-2 hover:scale-105 active:scale-95"
            }`}
          >
            {/* Ambient Warm Glow behind mascot */}
            <div className="absolute inset-0 bg-[#2250F4]/15 rounded-full blur-xl scale-75 group-hover:scale-110 transition-all duration-300"></div>

            {/* Mascot Container */}
            <div className="relative bg-white/95 backdrop-blur-md p-1.5 rounded-full border border-[#141416]/10 shadow-2xl flex items-center justify-center">
              <AiMascotLottie size={82} />
            </div>
          </button>
        </div>
      )}

      {/* ── 2. OPEN STATE: COMPACT FLOATING CHAT CARD ── */}
      {isOpen && (
        <div
          ref={chatCardRef}
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="relative w-[370px] sm:w-[415px] h-[560px] sm:h-[620px] flex flex-col bg-[#faf9f6]/95 backdrop-blur-2xl rounded-3xl border border-[#141416]/12 shadow-[0_24px_60px_-15px_rgba(20,20,22,0.22)] overflow-hidden transition-all duration-300 animate-scale-up overscroll-contain"
        >
          {/* Header Bar */}
          <div className="relative bg-[#ffffff]/90 px-4 py-3.5 border-b border-[#141416]/10 flex items-center justify-between z-10 shrink-0">
            {/* Left: Mascot & Info */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-[#f4f2ec] rounded-2xl border border-[#141416]/10 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
                <AiMascotLottie size={46} className="-mb-1" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif text-[17px] font-bold text-[#141416] tracking-tight">
                    Anthic&apos;s AI Agent
                  </h3>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#10b981]"></span>
                </div>
                <p className="text-[11px] font-medium text-[#141416]/60 flex items-center gap-1">
                  <span>Groq & Gemini Realtime</span>
                  <span>•</span>
                  <span className="text-[#059669] font-semibold">Active</span>
                </p>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowSuggestions((prev) => !prev)}
                title={showSuggestions ? "Hide suggestions" : "Show suggestions"}
                className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                  showSuggestions
                    ? "text-[#2250F4] bg-[#2250F4]/10"
                    : "text-[#141416]/40 hover:text-[#141416] hover:bg-[#141416]/5"
                }`}
              >
                <Sparkles size={16} />
              </button>
              <button
                onClick={handleClose}
                aria-label="Minimize Chat"
                className="p-1.5 text-[#141416]/50 hover:text-[#141416] hover:bg-[#141416]/5 rounded-xl transition-colors cursor-pointer"
              >
                <Minus size={18} />
              </button>
              <button
                onClick={handleClose}
                aria-label="Close Chat"
                className="p-1.5 text-[#141416]/50 hover:text-[#e11d48] hover:bg-[#e11d48]/10 rounded-xl transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Container (Protected from Lenis hijacking with data-lenis-prevent) */}
          <div
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 scrollbar-thin scrollbar-thumb-gray-200 overscroll-contain select-text"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                {/* Tool Calling Status Pill */}
                {msg.toolCall && (
                  <div className="mb-1.5 px-3 py-1 bg-[#10b981]/10 border border-[#10b981]/20 rounded-full flex items-center gap-1.5 text-[11px] font-medium text-[#047857] shadow-xs">
                    {msg.toolCall.tool === "capture_lead" ? (
                      <>
                        <CheckCircle2 size={12} className="text-[#059669]" />
                        <span>Lead captured & alerted Anthic via Telegram & Email</span>
                      </>
                    ) : msg.toolCall.tool === "book_meeting" ? (
                      <>
                        <Calendar size={12} className="text-[#059669]" />
                        <span>Cal.com meeting link generated</span>
                      </>
                    ) : (
                      <span>Executing {msg.toolCall.tool}...</span>
                    )}
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-[88%] px-4 py-3 text-[13.5px] leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#2250F4] text-white rounded-2xl rounded-tr-xs"
                      : "bg-[#ffffff] text-[#141416] border border-[#141416]/8 rounded-2xl rounded-tl-xs"
                  }`}
                >
                  {msg.text ? (
                    msg.sender === "agent" ? (
                      <div className="prose prose-sm max-w-none text-[#141416]">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                            strong: ({ children }) => <strong className="font-semibold text-[#141416]">{children}</strong>,
                            ul: ({ children }) => <ul className="list-disc pl-4 space-y-1 my-1.5">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal pl-4 space-y-1 my-1.5">{children}</ol>,
                            li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                            h1: ({ children }) => <h1 className="font-bold text-base my-2">{children}</h1>,
                            h2: ({ children }) => <h2 className="font-bold text-[15px] my-1.5">{children}</h2>,
                            h3: ({ children }) => <h3 className="font-bold text-[14px] my-1">{children}</h3>,
                            table: ({ children }) => (
                              <div className="overflow-x-auto my-2 rounded-xl border border-[#141416]/10">
                                <table className="w-full text-xs text-left border-collapse bg-[#faf9f6]/50">
                                  {children}
                                </table>
                              </div>
                            ),
                            thead: ({ children }) => <thead className="bg-[#141416]/5 border-b border-[#141416]/10">{children}</thead>,
                            th: ({ children }) => <th className="p-2 font-semibold text-[#141416]">{children}</th>,
                            td: ({ children }) => <td className="p-2 border-b border-[#141416]/5 align-top">{children}</td>,
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#2250F4] font-semibold underline underline-offset-2 break-all hover:text-[#1447df]"
                              >
                                {children}
                              </a>
                            ),
                            code: ({ children }) => (
                              <code className="bg-[#141416]/5 text-[#2250F4] px-1 py-0.5 rounded text-[12px] font-mono">
                                {children}
                              </code>
                            ),
                          }}
                        >
                          {cleanMarkdownText(msg.text)}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <span className="whitespace-pre-wrap">{msg.text}</span>
                    )
                  ) : isStreaming && msg.sender === "agent" ? (
                    <div className="flex items-center gap-1.5 py-1">
                      <span className="w-1.5 h-1.5 bg-[#2250F4] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-[#2250F4] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-[#2250F4] rounded-full animate-bounce"></span>
                    </div>
                  ) : null}
                </div>
                <span className="text-[10px] text-[#141416]/40 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Active Live Tool Badge */}
            {activeTool && (
              <div className="flex items-start">
                <div className="px-3 py-1.5 bg-[#2250F4]/10 border border-[#2250F4]/20 rounded-2xl flex items-center gap-2 text-[12px] font-medium text-[#2250F4] animate-pulse shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#2250F4] animate-ping"></span>
                  <span>Executing {activeTool === "capture_lead" ? "Priority Alert Dispatcher" : activeTool}...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Pills with Icons (Hides after first message, toggleable with sparkles icon) */}
          {showSuggestions && (
            <div className="px-3 py-2 bg-[#ffffff]/90 border-t border-[#141416]/5 shrink-0 transition-all">
              <div className="flex items-center justify-between text-[11px] font-semibold text-[#141416]/60 mb-1.5 px-1">
                <div className="flex items-center gap-1.5">
                  <MessageSquareQuote size={13} className="text-[#2250F4]" />
                  <span>Suggested Inquiries:</span>
                </div>
                {messages.length > 1 && (
                  <button
                    onClick={() => setShowSuggestions(false)}
                    className="text-[10px] text-[#141416]/40 hover:text-[#141416] cursor-pointer"
                  >
                    Hide
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-[84px] overflow-y-auto">
                {STARTER_PROMPTS.map((prompt, idx) => {
                  const IconComp = prompt.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt.text)}
                      disabled={isStreaming}
                      className="flex items-center gap-1.5 text-[11px] font-medium text-[#141416]/80 bg-[#faf9f6] hover:bg-[#2250F4] hover:text-white border border-[#141416]/10 hover:border-[#2250F4] px-2.5 py-1.2 rounded-full transition-all duration-200 text-left shadow-2xs shrink-0 cursor-pointer disabled:opacity-50 group"
                    >
                      <IconComp size={12} className="text-[#2250F4] group-hover:text-white shrink-0" />
                      <span>{prompt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Chat Input Bar */}
          <div className="p-3 bg-white border-t border-[#141416]/10 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 bg-[#f4f2ec]/80 border border-[#141416]/10 rounded-2xl px-3 py-1.5 focus-within:border-[#2250F4] focus-within:bg-white transition-all shadow-inner"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isStreaming}
                placeholder={isStreaming ? "Anthic's agent is thinking..." : "Ask Anthic's AI anything..."}
                className="flex-1 bg-transparent text-[13.5px] text-[#141416] placeholder:text-[#141416]/40 focus:outline-none py-1 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isStreaming}
                aria-label="Send message"
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  inputText.trim() && !isStreaming
                    ? "bg-[#2250F4] text-white shadow-md shadow-[#2250F4]/30 hover:scale-105 active:scale-95"
                    : "bg-[#141416]/10 text-[#141416]/30 cursor-not-allowed"
                }`}
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
