"use client";
import Exams from "@/components/exams/page";
import NavBar from "@/components/nav-bar/page";
import NavUtilities from "@/components/nav-utilities/page";
import Specialities from "@/components/specialities/page";
import { useState } from "react";
import Styles from "./styles.sass";
import Image from "next/image";
import Cat_image from "../../assets/cat_image.png";

export default function Services() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <div className="app">
      <NavBar />
      <section id="container-services">
        <NavUtilities
          buttonClick={buttonClick}
          setButtonClick={setButtonClick}
        />
        <Image
          src={Cat_image}
          alt="Imagem de gatinho"
          className={`${Styles.app_container_services_bg_image} app-container-services-bg-image`}
        />
        {buttonClick ? <Exams /> : <Specialities />}
      </section>
    </div>
  );
}