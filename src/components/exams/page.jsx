"use client";
import React, { useState } from "react";
import Styles from "../styles/styles.sass";
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
      <div className={`${Styles.container_group} container-group`}>
        <ul className={`${Styles.container_ul} container-group-ul`}>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Hemograma")}
          >
            Hemograma
          </li>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Bioquímico")}
          >
            Bioquímico
          </li>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Eletrocardiograma")}
          >
            Eletrocardiograma
          </li>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Ultrassonografia")}
          >
            Ultrassonografia
          </li>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Urinálise")}
          >
            Urinálise
          </li>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Doenças Infecciosas")}
          >
            Doenças
          </li>
        </ul>
      </div>
      <div className={`${Styles.container_about} container-about`}>
        <h2 className={`${Styles.container_about_h2} container-about-h2`}>
          {activeItem}
        </h2>
        <p className={`${Styles.container_about_p} container-about-p`}>
          {time}
        </p>
      </div>
    </div>
  );
}
