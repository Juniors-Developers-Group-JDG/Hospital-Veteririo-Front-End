import About from "@/components/About/page";
import Services from "@/components/Services/page";
import Contact from "@/components/Contact/page";
import Home from "@/components/Home/page";
import Styles from "./styles.sass";

export default function HomePage() {
  return (
    <main
      className={`${Styles.main_container} main-container`}
      id="main-container"
    >
      <Home />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
