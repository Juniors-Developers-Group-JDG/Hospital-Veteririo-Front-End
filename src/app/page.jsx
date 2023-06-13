import About from "@/components/About/page";
import Services from "@/components/Services/page";
import Contact from "@/components/Contact/page";
import Home from "@/components/Home/page";
import Footer from '@/components/Footer/page';

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
