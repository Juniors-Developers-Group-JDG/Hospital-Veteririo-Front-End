"use client";
import Email from "@/components/form_components/email";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from './forgotPassword.module.scss';
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [inputToken, setInputToken] = useState(false);
  const [emailExists, setEmailExists] = useState(true);

  const { push } = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("https://jdg-site-vet.onrender.com/user");

      if (response.status === 200) {
        const users = response.data;
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
          const user = await axios.post('https://jdg-site-vet.onrender.com/recoverPassword', {
            email
          });
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

      {!inputToken ? (
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
      ) : (
        <div className={style.group}>
          <div className={style.title}>
            <p>Um link de recuperação foi enviado para o seu e-mail.</p>
          </div>
          <Link href="/">
            <button className={style.recoverbutton}>
              Voltar para home
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}
