"use client";
import React, { useState } from "react";
import styles from "./exams.module.scss";
import { itemTextsExams } from "./text_items_exams";

export default function Exams() {
  const [activeItem, setActiveItem] = useState("Hemograma");
  const [data, setData] = useState(itemTextsExams["Hemograma"]);
  


  const handleItemClick = (item) => {
    setActiveItem(item);
    setData(itemTextsExams[item]);
    console.log(data);
  };

  return (
    <section className={styles.exams}>
        <aside>
          <ul>
            <li onClick={()=>handleItemClick('Hemograma')}>Hemograma</li>
            <li onClick={()=>handleItemClick('Bioquímico')}>Bioquímico</li>
            <li onClick={()=>handleItemClick('Eletrocardiograma')}>Eletrocardiograma</li>
            <li onClick={()=>handleItemClick('Ultrassonografia')}>Ultrassonografia</li>
            <li onClick={()=>handleItemClick('Urinálise')}>Urinálise</li>
            <li onClick={()=>handleItemClick('Doenças Infecciosas')}>Doenças Infecciosas</li>
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
  );
}