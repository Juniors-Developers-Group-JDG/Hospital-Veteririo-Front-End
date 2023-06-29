"use client";
import Email from "@/components/form_components/email/page";
import Password from "@/components/form_components/password/page";
import Link from "next/link";
import style from "./login.module.scss";
import Image from 'next/image';

import { useContext, useState } from 'react';
import AuthContext from '../contexts/auth_context/AuthContext';

export default function Login() {
    const { email, password } = useContext(AuthContext);
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

    const userAccess = {
        email: 'admin@teste.com.br',
        senha: '123456',
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email) {
            setIsEmailEmpty(true);
        } else {
            setIsEmailEmpty(false);
        }

        if (!password) {
            setIsPasswordEmpty(true);
        } else {
            setIsPasswordEmpty(false);
        }

        if (email && password) {
            if (userAccess.email === email && userAccess.senha === password) {
                localStorage.setItem('isAuthenticated', true);
                window.location.href = '/admin';
            } else {
                if (userAccess.email !== email) {
                    setIsEmailInvalid(true);
                } else {
                    setIsEmailInvalid(false);
                }

                if (userAccess.senha !== password) {
                    setIsPasswordInvalid(true);
                } else {
                    setIsPasswordInvalid(false);
                }
            }
        }
    };

    return (
        <main className={style.main}>
            <div className={style.box_login}>
                <div className={style.title}>
                    <h2>Login do Administrador</h2>
                </div>

                <form className={style.form}>
                    <Email value={email} />
                    {isEmailEmpty && (
                        <p className={style.error}>Por favor, preencha o campo de e-mail</p>
                    )}
                    {isEmailInvalid && (
                        <p className={style.error}>E-mail inválido</p>
                    )}

                    <Password value={password} />
                    {isPasswordEmpty && (
                        <p className={style.error}>Por favor, preencha o campo de senha</p>
                    )}
                    {isPasswordInvalid && (
                        <p className={style.error}>Senha inválida</p>
                    )}

                    <div className={style.option_user}>
                        <div className={style.option}>
                            <Link href="/forgotPassword">Esqueceu sua senha?</Link>
                        </div>
                    </div>

                    <button type='button' onClick={handleSubmit}>
                        Entrar
                    </button>
                </form>
            </div>

            <figure>
                <Image src="/assets/image4.png" alt="background animal" width={500} height={500} />
                <Image src="/assets/image6.png" alt="background animal" width={500} height={500} />
            </figure>
        </main>
    );
}
