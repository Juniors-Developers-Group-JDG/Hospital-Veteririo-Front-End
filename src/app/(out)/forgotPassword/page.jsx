"use client";
import Email from "@/components/form_components/email";
import Token from "@/components/form_components/token";
import Link from "next/link";
import { useState } from "react";
import style from './forgotPassword.module.scss';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [inputToken, setInputToken] = useState(false)
  const [token , setToken]= useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputToken(true)
    console.log("formulário enviado");
  };
  
  const handleCheckToken = (event) => {
    event.preventDefault();
    console.log("formulário enviado");

    // Fazer a logica de validação do token aqui
    window.location.href = '/forgotPassword/changePassword'

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
       
       {/* input-email */}
       {!inputToken && (
          <div className={style.group}>
          <div className={style.title}>
            <p>Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
          </div>
          <form>
            <div className={style.box}>
              <Email email={email} setEmail={setEmail}/>
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
       )}

        {/* input-token */}
       {inputToken && (
          <div className={style.group}>
          <div className={style.title}>
            <p>Agora informe o código enviado para o seu e-mail.</p>
          </div>
          <form>
            <div className={style.box}>
              <Token token={token} setToken={setToken}/>
            </div>
            <button onClick={(event) => handleCheckToken(event)}>
              Próximo
            </button>
          </form>
          </div>
       )}
    </main>
    
  );
}
