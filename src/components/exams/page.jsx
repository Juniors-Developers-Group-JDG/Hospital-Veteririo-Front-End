"use client";
import React, { useState } from "react";
import Styles from "./styles.sass";
import { itemTextsExams } from "./text_items_exams";

export default function Exams() {
  const [activeItem, setActiveItem] = useState("Hemograma");
  const [time, setTime] = useState(itemTextsExams["Hemograma"]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setTime(itemTextsExams[item]);
  };

  return (
    <div className={`${Styles.container} container`}>
      <div className={`${Styles.group_exams} exams`}>
        <nav>
          <ul>
            <li onClick={() => handleItemClick("Hemograma")}>Hemograma</li>
            <li onClick={() => handleItemClick("Bioquímico")}>Bioquímico</li>
            <li onClick={() => handleItemClick("Eletrocardiograma")}>
              Eletrocardiograma
            </li>
            <li onClick={() => handleItemClick("Ultrassonografia")}>
              Ultrassonografia
            </li>
            <li onClick={() => handleItemClick("Urinálise")}>Urinálise</li>
            <li onClick={() => handleItemClick("Doenças Infecciosas")}>
              Doenças Infecciosas
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${Styles.about_exams} about-exams`}>
        <h2>{activeItem}</h2>
        <p>{time}</p>
      </div>
    </div>
  );
}
