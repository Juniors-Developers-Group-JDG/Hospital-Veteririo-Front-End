"use client";
import { useState } from "react";
import Style from "./styles.sass";
import NavBar from '@/app/nav_bar/page';

export default function Register() {
  // input do tipo "tel" -> [0-9]{5} -> Vamos receber apenas algarismos de 0 a 9 ([0-9]). E eles irão se repetir por 5 vezes ({5}).

  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(number);
  };

  return (
    <><NavBar /><div className={`${Style.container} container`}>
      <h1 className={`${Style.container_h1} container-h1`}>Cadastre-se</h1>
      <form className={`${Style.container_form} container-form`}>
        <label>
          <input
            type="email"
            className={`${Style.container_input} container-input container-input-email`}
            placeholder="E-mail" />
        </label>
        <label>
          <input
            type="text"
            className={`${Style.container_input} container-input container-input-cep`}
            placeholder="CEP" />
        </label>
        <label>
          <input
            type="text"
            className={`${Style.container_input} container-input container-input-address`}
            placeholder="Logradouro"
            onChange={(event) => setAddress(event.target.value)} />
        </label>
        <label>
          <input
            type="tel"
            pattern="^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$"
            placeholder={`(xx) xxxxx-xxxx`}
            onChange={(event) => setNumber(event.target.value)}
            className={`${Style.container_input} container-input container-input-number`} />
        </label>
        <label>
          <input
            type="password"
            className={`${Style.container_input} container-input container-input-password`}
            placeholder="Senha" />
        </label>
        <label>
          <input
            type="password"
            className={`${Style.container_input} container-input container-input-password`}
            placeholder="Confirme sua senha" />
        </label>
        <button
          type="submit"
          className={`${Style.container_button} container-button`}
        >
          Cadastrar
        </button>
      </form>
    </div></>
  );
}
