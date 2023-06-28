"use client";
import Email from "@/components/form_components/email/page";
import Password from "@/components/form_components/password/page";
import Image from 'next/image';
import Link from "next/link";
import style from "./login.module.scss";

import { useContext } from 'react';
import AuthContext from '../contexts/auth_context/AuthContext';


export default function Login() {
  const { email, password } = useContext(AuthContext);

  const userAcess = {
    email: 'admin@teste.com.br',
    senha: '123456',
   }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userAcess.email === email && userAcess.senha === password) {
      localStorage.setItem('isAuthenticated', true);
      alert("Login efetuado com sucesso!");
      return window.location.href = '/admin';
    } else {
      alert("Email ou senha incorretos!");
      window.location.href = '/login';
    }
  };

  return (
    <main className={style.main}>
      <div className={style.box_login}>
      <div className={style.title}>
        <h2>Login do Administrador</h2>
      </div>

      <form className={style.form}>
        <Email
          value = {email}
          />
        <Password
          value = {password}
        />
        
        <div className={style.option_user}>
          <div className={style.option}>
            <Link href="/forgotPassword">Esqueceu sua senha?</Link>
          </div>
        </div>
          <button
            type='button'
            onClick={handleSubmit}
            >Entrar
          </button>
      </form>

      </div>

      <figure>
        <Image
          src="/assets/image4.png"
          alt="background animal"
          width={500}
          height={500}
        />
        <Image
          src="/assets/image6.png"
          alt="background animal"
          width={500}
          height={500}
        />
      </figure>
    </main>
  );
}