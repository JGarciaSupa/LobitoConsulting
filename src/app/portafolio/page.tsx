import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Portfolio />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}