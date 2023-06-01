"use client";
import { useState } from "react";
import Style from "./styles.sass";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <div className={`${Style.container} container`}>
        <h1 className={`${Style.container_h1} container-h1`}>Faça seu login</h1>
        <form
          onSubmit={handleSubmit}
          className={`${Style.container_form} container-form`}
        >
          <label
            htmlFor="email"
            className={`${Style.container_label} container-label`}
          >
            E-mail
          </label>
          <input
            type="email"
            className={`${Style.container_input} container-input container-input-email`}
            id="email"
            onChange={(event) => handleChange(event)}
            name="email"
          />

          <label
            htmlFor="password"
            className={`${Style.container_label} container-label`}
          >
            Senha
          </label>
          <input
            type="password"
            className={`${Style.container_input} container-input container-input-password`}
            id="password"
            onChange={(event) => handleChange(event)}
            name="password"
          />

          <div className="container-navigation-link">
            <a href="/forgotPassword" className="container-forgotPassword">
              Esqueceu sua senha?
            </a>
            <hr />
            <a href="/register">Ainda não tem conta?</a>
          </div>
          <button
            type="button"
            className={`${Style.container_button} container-button`}
            onClick={(event) => handleSubmit(event)}
          >
            Entrar
          </button>
          <div className={`${Style.container} container-or`}>
            <div className={`${Style.container} container-or-line`} />
            <p>ou</p>
            <div className={`${Style.container} container-or-line`} />
          </div>
          <div className={`${Style.container_button} second-login-container`}>
            <button
              type="button"
              className={`${Style.container_button} second-login`}
            >
              Entrar com Google
            </button>
            <button
              type="button"
              className={`${Style.container_button} second-login`}
            >
              Entrar com Facebook
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
