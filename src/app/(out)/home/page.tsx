import About from "@/components/About/page";
import Contact from "@/components/Contact/page";
import Footer from '@/components/Footer/page';
import Home from "@/components/Home/page";
import Services from "@/components/Services/page";

export default function HomePage() {
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
