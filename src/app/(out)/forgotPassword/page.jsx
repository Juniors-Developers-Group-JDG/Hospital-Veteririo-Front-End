"use client";
import Email from "@/components/form_components/email";
import Token from "@/components/form_components/token";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from './forgotPassword.module.scss';

const userRecovering = {
  email: 'admin@teste.com.br',
  code: '123456789'
}

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [inputToken, setInputToken] = useState(false);
  const [token, setToken] = useState("");
  const [emailExists, setEmailExists] = useState(true);
  const [validToken, setValidToken] = useState(true);

  const { push } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === userRecovering.email) {
      setInputToken(true);
      setEmailExists(true); 
    } else {
      setInputToken(false);
      setEmailExists(false); 
    }
  };

  const handleCheckToken = (event) => {
    event.preventDefault();

    if (token === userRecovering.code) {
      setValidToken(true); 
      push('/forgotPassword/changePassword');
    } else {
      setValidToken(false); 
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const getBack = () => {
    push("/login");
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
              <Email email={email} setEmail={setEmail} Value={email} onChange={handleChange} />
            </div>
            {!emailExists && <p className={style.error}>O e-mail informado não existe</p>}
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
              <Token token={token} setToken={setToken} />
            </div>
            {!validToken && <p className={style.error}>O código informado é inválido</p>}
            <button onClick={(event) => handleCheckToken(event)}>
              Próximo
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
