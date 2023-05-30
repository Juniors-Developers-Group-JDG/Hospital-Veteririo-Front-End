"use client";
import React, { useState } from "react";
import Styles from "../styles/styles.sass";
import { itemTextsSpecialities } from "./text_itens_specialities";

export default function Specialities() {
  const [activeItem, setActiveItem] = useState("Acupuntura");
  const [time, setTime] = useState(itemTextsSpecialities["Acupuntura"]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setTime(itemTextsSpecialities[item]);
  };

  return (
    <div className={`${Styles.container} container`}>
      <div className={`${Styles.container_group} container-group`}>
        <ul className={`${Styles.container_ul} container-group-ul`}>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Acupuntura")}
          >
            Acupuntura
          </li>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Anestesiologia")}
          >
            Anestesiologia
          </li>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Cardiologia")}
          >
            Cardiologia
          </li>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Dermatologia")}
          >
            Dermatologia
          </li>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Infectologia")}
          >
            Infectologia
          </li>
          <li
            className={`${Styles.container_li} container-group-li`}
            onClick={() => handleItemClick("Neurologia")}
          >
            Neurologia
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
