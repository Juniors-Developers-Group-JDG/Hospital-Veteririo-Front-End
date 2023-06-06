"use client";
import Exams from "@/components/exams/page";
import NavUtilities from "@/components/nav-utilities/page";
import Specialities from "@/components/specialities/page";
import { useState } from "react";
import Styles from "./styles.sass";


export default function Services() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <div className={`${Styles.app_container} app-container`} id='services'>
      <h1 className={`${Styles.app_container_title} app-container-title`}>
        Serviços
      </h1>
      <section
        className={`${Styles.app_container_services} app-container-services`}
      >
        <NavUtilities
          buttonClick={buttonClick}
          setButtonClick={setButtonClick}
        />
        <div
          className={`${Styles.app_container_services_info} app-container-services-info`}
        >
          {buttonClick ? <Exams /> : <Specialities />}
        </div>
      </section>
    </div>
  );
}
