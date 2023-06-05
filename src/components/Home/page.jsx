"use client";
import Image from "next/image";
import { Button } from "../Button";
import birdSvg from "../../assets/home/bird-svg.svg";
import catSvg from "../../assets/home/cat-svg.svg";
import dogSvg from "../../assets/home/dog-svg.svg";
import veterinariaHomeImage from "../../assets/home/veterinaria-home.png";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left_home_section}>
        <section className={styles.left_home_section_content}>
          <h1 className={styles.heading}>
            Boas vindas ao mundo de cuidados veterinários de qualidade!
          </h1>

          <div className={styles.divider} />

          <div className={styles.footer}>
            <p className={styles.paragraph}>
              Oferecemos todos os serviços para o seu animalzinho de estimação,
              buscando sempre unir qualidade no atendimento.
            </p>

            <div className={styles.button_and_animals_container}>
              <Link href="#contact">
                <Button>Solicite Orçamento</Button>
              </Link>
              <div className={styles.animals_icons_container}>
                <Image src={dogSvg} width={43} height={43} alt="" />
                <Image src={catSvg} width={43} height={43} alt="" />
                <Image src={birdSvg} width={43} height={43} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className={styles.right_home_section}>
        <Image
          className={styles.image}
          alt="Veterinária segurando um cachorro"
          src={veterinariaHomeImage}
          width={714}
          height={700}
        />
      </section>
    </main>
  );
}
