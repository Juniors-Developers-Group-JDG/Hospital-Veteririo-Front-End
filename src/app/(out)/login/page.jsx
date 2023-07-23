"use client";
import Email from "@/components/form_components/email";
import Password from "@/components/form_components/password";
import Image from 'next/image';
import Link from "next/link";
import Loading from "../../../components/Loading/page";
import { useRouter } from "next/navigation";
import style from "./login.module.scss";

import { useState } from 'react';
import { createCookie } from "../../actions";

const userAccess = {
  email: 'admin@teste.com.br',
  senha: '123456',
 }

export default function Login() {
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const [showLoading, setShowLoading] = useState(false);

   const { push } = useRouter();

   const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowLoading(true);
    setTimeout(() => {
    if (userAccess.email === email && userAccess.senha === password) {
      createCookie('authenticated', true)
      push('/admin');
      setShowLoading(false);

      return;
    } else {
      setShowLoading(false);
      alert("Email ou senha incorretos!");
      push('/login');
    }
  },3000);
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
          onChange={handleEmailChange}
        />
        <Password
          value = {password}
          onChange={handlePasswordChange}
          placeholder='Senha'
        />
        
        <div className={style.option_user}>
          <div className={style.option}>
            <Link href="/forgotPassword">Esqueceu sua senha?</Link>
          </div>
        </div>
          <button
            type='button'
            onClick={handleSubmit}
            > {showLoading ? <Loading /> : 'Entrar'}
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