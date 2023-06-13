"use client";
import React, { useState } from "react";
import styles from "./navUtilites.module.scss";

export default function NavUtilities({ button, setButtonClick }) {

  const [select, setSelect] = useState('Exames')


const clickExames = () => {
  setButtonClick(!button)
  setSelect('Exames')
}

const clickEspecialidades = () => {
  setButtonClick(button)
  setSelect('Especialidades')
}
 

  return (
    <div className={styles.nav_list}>
        <nav>
            <ul>
              <li onClick={clickExames} className={select === 'Exames' ? styles.selectLi : ''}>Exames</li>
              <li onClick={clickEspecialidades} className={select === 'Especialidades' ? styles.selectLi : ''}>Especialidades</li>
            </ul>
        </nav>
    </div> 
  );
}

