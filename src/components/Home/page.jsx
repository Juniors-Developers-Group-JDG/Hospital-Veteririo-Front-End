"use client";
import Image from "next/image";
import birdSvg from "../../assets/home/bird-svg.svg";
import catSvg from "../../assets/home/cat-svg.svg";
import dogSvg from "../../assets/home/dog-svg.svg";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className={styles.main} id="home">
        <div className={styles.left_text}>
            <div className={styles.title}>
              <h2>Boas vindas ao mundo de cuidados veterinários de qualidade!</h2>
            </div>
            <div className={styles.slogan}>
              <p>Oferecemos todos os serviços para o seu animalzinho de estimação, buscando
                sempre unir qualidade no atendimento.
              </p>
            </div>
            <div className={styles.pets_icon}>
                <div className={styles.animal}>
                    <Image src={catSvg} width={50} height={50} alt="Ícone gato" className={styles.pet}/>
                </div>
                <div className={styles.animal}>
                    <Image src={dogSvg} width={50} height={50} alt="Ícone gato"  className={styles.pet}/>
                </div>
                <div className={styles.animal}>
                   <Image src={birdSvg} width={50} height={50} alt="Ícone gato"  className={styles.pet}/>
                </div>
            </div>
        </div>

        <div className={styles.right_img}>
            <div className={styles.box_img}>
              <img src="/assets/image1.png" alt="Cuidados veterinários"/>
            </div>
        </div>
    </main>
  );
} 
