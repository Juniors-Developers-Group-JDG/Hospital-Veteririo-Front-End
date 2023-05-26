"use client";
import { useState } from "react";
import Style from "./styles.sass";
import NavBar from '@/app/nav_bar/page';

export default function Login() {
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
  <>
    <NavBar />
    <div className={`${Style.container} container`}>
      <h1 className={`${Style.container_h1} container-h1`}>Faça seu login</h1>
      <form className={`${Style.container_form} container-form`}>
        <label for="email" className={`${Style.container_label} container-label`}>
          Email
        </label>
          <input
            type="email"
            className={`${Style.container_input} container-input container-input-email`}
            id="email"
            />
        <label for="password" className={`${Style.container_label} container-label`}>
          Senha
        </label>
          <input
            type="password"
            className={`${Style.container_input} container-input container-input-password`}
            id='password'
          />
        <div className='container-navigation-link'>
          <a href="/forgotPassword" className='container-forgotPassword'>Esqueceu sua senha?</a>
          <a href="/register">Ainda não tem conta?</a>
        </div>
        <button
          type="submit"
          className={`${Style.container_button} container-button`}
        >
          Cadastrar
        </button>
      </form>
    </div>
  </>
  );
}
