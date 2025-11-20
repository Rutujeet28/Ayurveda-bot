import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BodySection from "./components/BodySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <BodySection />
      <Footer />
    </main>
  );
}
