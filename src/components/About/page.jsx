import Image from "next/image";
import doutores from "../../assets/about/doutores.png";
import styles from "./about.module.sass";

export default function About() {
  return (
    <main className={styles.main} id="about">
      <section className={styles.section_right}>
        <Image
          className={styles.image}
          alt="Casal de veterinários"
          src={doutores}
          width={348}
          height={338}
        />
      </section>
      <div className={styles.divider} />
      <section className={styles.section_left}>
        <div className={styles.section_left_text}>
          <h1
            className={styles.section_title}
          >Sobre nós</h1>
          <p>
          Desde a nossa fundação em 1998, temos o compromisso de fornecer cuidados excepcionais aos animais de estimação e orientar os seus tutores sobre como promover uma vida saudável e feliz para eles. Aqui, você encontrará informações valiosas e conselhos especializados para todas as suas necessidades veterinárias. Nossa equipe altamente qualificada está pronta para ajudar você e seu amiguinho peludo. Conte conosco para oferecer os melhores cuidados veterinários possíveis!{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
