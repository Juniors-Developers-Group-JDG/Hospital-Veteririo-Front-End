"use client";
import Exams from "@/components/exams/page";
import NavUtilities from "@/components/nav-utilities/page";
import Specialities from "@/components/specialities/page";
import { useState } from "react";

export default function Services() {
  const [buttonClick, setButtonClick] = useState(false);

  return (
    <div className="App">
      <section id="container-services">
        <NavUtilities
          buttonClick={buttonClick}
          setButtonClick={setButtonClick}
        />
        {buttonClick ? <Exams /> : <Specialities />}
      </section>
    </div>
  );
}
