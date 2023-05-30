"use client";
import React from "react";
import Styles from "./styles.sass";

export default function NavUtilities({ button, setButtonClick }) {
  return (
    <div className={`${Styles.group_navUtilities} group-navUtilities`}>
      <nav
        className={`${Styles.group_navUtilities_nav} group-navUtilities-nav`}
      >
        <ul className={`${Styles.group_navUtilities_ul} group-navUtilities-ul`}>
          <li
            className={`${Styles.group_navUtilities_li} group-navUtilities-li`}
            onClick={() => setButtonClick(!button)}
          >
            Exames
          </li>
          <li
            className={`${Styles.group_navUtilities_li} group-navUtilities-li`}
            onClick={() => setButtonClick(button)}
          >
            Especialidades
          </li>
        </ul>
      </nav>
    </div>
  );
}
