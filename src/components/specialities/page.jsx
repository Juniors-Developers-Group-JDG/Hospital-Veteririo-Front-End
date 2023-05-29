"use client";
import React, { useState } from "react";
import Styles from "./styles.sass";
import { itemTextsSpecialities } from "./text_itens_specialities";

export default function Specialities() {
  const [activeItem, setActiveItem] = useState("Acupuntura");
  const [time, setTime] = useState(itemTextsSpecialities["Acupuntura"]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setTime(itemTextsSpecialities[item]);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles["group-specialities"]}>
        <nav>
          <ul>
            <li onClick={() => handleItemClick("Acupuntura")}>Acupuntura</li>
            <li onClick={() => handleItemClick("Anestesiologia")}>
              Anestesiologia
            </li>
            <li onClick={() => handleItemClick("Cardiologia")}>Cardiologia</li>
            <li onClick={() => handleItemClick("Dermatologia")}>
              Dermatologia
            </li>
            <li onClick={() => handleItemClick("Infectologia")}>
              Infectologia
            </li>
            <li onClick={() => handleItemClick("Neurologia")}>Neurologia</li>
          </ul>
        </nav>
      </div>
      <div className={Styles["about-specialities"]}>
        <h2>{activeItem}</h2>
        <p>{time}</p>
      </div>
    </div>
  );
}
