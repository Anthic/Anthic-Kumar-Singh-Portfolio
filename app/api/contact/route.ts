import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is temporarily unconfigured. Please email directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "anthickumarsingh2@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `💼 New Portfolio Message from ${name}: ${subject || "General Inquiry"}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #fef9f5; border-radius: 16px; border: 1px solid #ebdcd0; color: #141416;">
          <h2 style="color: #1447df; margin-top: 0; font-size: 24px;">New Message from Portfolio Website</h2>
          <div style="background-color: #ffffff; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #f0e6dc;">
            <p style="margin: 0 0 12px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 0 0 12px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #1447df;">${email}</a></p>
            <p style="margin: 0 0 12px 0;"><strong>Subject / Intent:</strong> ${subject || "General Inquiry"}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-radius: 12px; border: 1px solid #f0e6dc;">
            <h3 style="margin-top: 0; font-size: 16px; color: #555962; text-transform: uppercase; letter-spacing: 0.5px;">Message Content</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; margin: 0; color: #2c3038;">${message}</p>
          </div>
          <p style="font-size: 13px; color: #888c94; margin-top: 24px; text-align: center;">
            Sent directly from your portfolio contact form. Hit <strong>Reply</strong> to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
