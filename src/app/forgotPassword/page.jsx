"use client";
import { useState } from "react";
import style from './forgotPassword.module.scss';
import Link from "next/link";
import Email from "@/components/form_components/email/page";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formulário enviado");
  };

  const handleChange = (event) => { 
    const { value } = event.target;
    setEmail(value);
  };

  const getBack = () => {
    window.location.href = "/login";
  };

  return (
    <main className={style.main}>

       <div className={style.title}>
          <h2>Recuperar senha</h2>
       </div>
       <div className={style.group}>
          <div className={style.title}>
            <p>Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
          </div>
          <form>
            <div className={style.box}>
              <Email email={email} setEmail={setEmail}r/>
            </div>
            <button onClick={(event) => handleSubmit(event)}>
              Próximo 
            </button>
            <Link href="/">
            <button>
              Voltar para home 
            </button>
            </Link>
          </form>
       </div>
    </main>
    
  );
}
