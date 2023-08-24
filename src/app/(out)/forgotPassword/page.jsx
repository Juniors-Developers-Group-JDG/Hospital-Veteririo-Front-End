"use client";
import Email from "@/components/form_components/email";
import Token from "@/components/form_components/token";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from './forgotPassword.module.scss';
import axios from "axios";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [inputToken, setInputToken] = useState(false);
  const [token, setToken] = useState("");
  const [emailExists, setEmailExists] = useState(true);
  const [validToken, setValidToken] = useState(true);

  const { push } = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://jdg-site-vet.onrender.com/user", {
        method: "GET",
      });

      if (response.ok) {
        const users = await response.json();
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
          console.log("chamei")
          const user = await axios.post('https://jdg-site-vet.onrender.com/recoverPassword', {
            email
          })
          console.log(user)
          setInputToken(true);
          setEmailExists(true);
        } else {
          setInputToken(false);
          setEmailExists(false);
        }
      } else {
        console.error("Falha ao buscar dados do usuário");
      }
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  };

  const handleCheckToken = (event) => {
    event.preventDefault();

    // Handle token validation as you originally intended
    // This part is not affected by the backend integration

    // Example:
    // if (token === userRecovering.code) {
    //   setValidToken(true);
    //   push('/forgotPassword/changePassword');
    // } else {
    //   setValidToken(false);
    // }
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
    </main>
  );
}
