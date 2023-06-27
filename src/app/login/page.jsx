"use client";
import Email from "@/components/form_components/email/page";
import Password from "@/components/form_components/password/page";
import Link from "next/link";
import { useState } from "react";
import style from "./login.module.scss";

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
    <main className={style.main}>
      <div className={style.box_login}>
      <div className={style.title}>
        <h2>Faça seu login</h2>
      </div>

      <form onSubmit={handleSubmit} className={style.form}>
      <Email email={email} setEmail={setEmail}/>
      <Password password={password} setPassword={setPassword}/>
      
      <div className={style.option_user}>
        <div className={style.option}>
          <Link href="/forgotPassword">Esqueceu sua senha?</Link>
        </div>
        <div className={style.option}>
          <Link href="/register">Ainda não tem conta?</Link>
        </div>
      </div>
        <button onClick={(event)=>handleSubmit(event)}>Entrar</button>
      </form>

      </div>

      <figure>
        <img src="/assets/image4.png" alt="background animal"/>
        <img src="/assets/image6.png" alt="background animal"/>
      </figure>
    </main>
  );
}

