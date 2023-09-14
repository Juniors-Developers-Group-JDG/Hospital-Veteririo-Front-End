import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Services from "@/components/Services";

export default function LandingPage() {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
