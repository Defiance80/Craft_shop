import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Menu from "@/components/Menu";
import Taplist from "@/components/Taplist";
import EventSpace from "@/components/EventSpace";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Events />
      <Taplist />
      <Menu />
      <EventSpace />
      <Footer />
      <Chatbot />
    </main>
  );
}
