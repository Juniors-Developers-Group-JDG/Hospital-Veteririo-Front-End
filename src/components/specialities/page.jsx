"use client";
import React, { useState } from "react";
import styles from './specialities.module.scss';
import { itemTextsSpecialities } from "./text_itens_specialities";

export default function Specialities() {
  const [activeItem, setActiveItem] = useState("Acupuntura");
  const [data, setData] = useState(itemTextsSpecialities["Acupuntura"]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setData(itemTextsSpecialities[item]);
  };

  return (
    <section className={styles.exams}>
        <aside>
          <ul>
            <li onClick={()=>handleItemClick('Acupuntura')}>Acupuntura</li>
            <li onClick={()=>handleItemClick('Anestesiologia')}>Anestesiologia</li>
            <li onClick={()=>handleItemClick('Cardiologia')}>Cardiologia</li>
            <li onClick={()=>handleItemClick('Dermatologia')}>Dermatologia</li>
            <li onClick={()=>handleItemClick('Infectologia')}>Infectologia</li>
            <li onClick={()=>handleItemClick('Neurologia')}>Neurologia</li>
          </ul>
        </aside>

        <div className={styles.content}>
          <div className={styles.title}>
            <h3>{activeItem}</h3>
          </div>

          <div className={styles.text}>
            <p>{data}</p>
          </div>
        </div>
    </section>
  )
}
