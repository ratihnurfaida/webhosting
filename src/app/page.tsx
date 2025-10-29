import { About } from "@/components/pages/About";
import { Contact } from "@/components/pages/Contact";
import { Footer } from "@/components/pages/Footer";
import { Header } from "@/components/pages/Header";
import { Hero } from "@/components/pages/Hero";
import { Services } from "@/components/pages/Services";
import { Team } from "@/components/pages/Team";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}