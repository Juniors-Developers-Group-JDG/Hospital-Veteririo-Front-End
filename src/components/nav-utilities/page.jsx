"use client";
import React from "react";
import Styles from "./styles.sass";

export default function NavUtilities({ button, setButtonClick }) {
  return (
    <div className={`${Styles.group_navUtilities} group-navUtilities`}>
      <nav>
        <ul>
          <li onClick={() => setButtonClick(!button)}>Exames</li>
          <li onClick={() => setButtonClick(button)}>Especialidades</li>
        </ul>
      </nav>
    </div>
  );
}
