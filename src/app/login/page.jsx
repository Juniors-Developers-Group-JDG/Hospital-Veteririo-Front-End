"use client";
import Email from "@/components/form_components/email/page";
import Password from "@/components/form_components/password/page";
import { useState } from "react";
import Style from "./styles.sass";

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
          <Email email={email} setEmail={setEmail} />
          <Password password={password} setPassword={setPassword} />
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
          <div className={`${Style.container_button} container-second-login `}>
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
