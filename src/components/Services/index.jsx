"use client";
import Exams from "@/components/exams";
import NavUtilities from "@/components/nav-utilities";
import Specialities from "@/components/specialities";
import { useState } from "react";
import styles from "./services.module.scss";


export default function Services() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <section className={styles.services} id="services">
        <div className={styles.title}>
          <h2>Serviços</h2>
        </div>
        <div className={styles.container}>
          <NavUtilities buttonClick={buttonClick} setButtonClick={setButtonClick}/>

          <div className={styles.info}>
          {
            buttonClick ? <Exams/> : <Specialities/>
          }
          </div>
        </div>
    </section>
  );
}
