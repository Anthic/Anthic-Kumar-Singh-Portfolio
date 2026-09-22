import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#141416] selection:bg-[#2250F4] selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Hero />
        </main>
      </div>
    </SmoothScroll>
  );
}
