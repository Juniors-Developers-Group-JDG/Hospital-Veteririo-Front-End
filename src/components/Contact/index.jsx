import SimpleMap from "@/components/GoogleMap";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { FiMap } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
        <div className={styles.title}>
            <h2>Onde nos encontrar</h2>
        </div>

        <div className={styles.location}>
          <div className={styles.box_map}>
           <SimpleMap/>
          </div>

          <div className={styles.box_info}>
            <div className={styles.title}>
              <h3>Entre em contato conosco</h3>
            </div>

            <div className={styles.information}>
              <p><BsFillTelephoneFill/> (11)99999-9999</p>
            </div>
            <div className={styles.information}>
              <p><BsWhatsapp/> (11)55555-5555</p>
            </div>
            <div className={styles.information}>
              <p><FiMap/> Rua dos Júniors,0 - Rio de Janeiro - RJ</p>
            </div>
            <div className={styles.information}>
              <p><LuMapPin/> <a href="https://goo.gl/maps/J7jYaZv8NuvkAmCY7" target="_blank">Como chegar</a></p>
            </div>
          </div>
        </div>
    </section>
  );
}
