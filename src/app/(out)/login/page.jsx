'use client';
import Email from "@/components/form_components/email";
import Password from "@/components/form_components/password";
import Image from 'next/image';
import Link from "next/link";
import {useRouter} from "next/navigation";
import Loading from "../../../components/Loading/page";
import style from "./login.module.scss";
import {useState} from 'react';
import {createCookie} from "../../actions";



export default function Login() {
    const [email, setEmail] = useState("");
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [password, setPassword] = useState("");
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false)
    const [showLoading, setShowLoading] = useState(false);
    const [loginOk, setLoginOk] = useState(true);

    const {push} = useRouter();

    const handleEmail = (event) => {
        setEmail(event.target.value);
        setLoginOk(true);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
        setLoginOk(true);
    };

    const userLogin = async (email, password) => {
        const URL = 'https://jdg-site-vet.onrender.com/login';
    
        try {
            const response = await fetch(URL, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Erro ao fazer login');
            }
    
            const data = await response.json();
            console.log('data:', data);
            // armazenando o token de autenticação no localStorage
            localStorage.setItem('token', data.token);
            setLoginOk(true);
            return data;
        } catch (error) {
            setLoginOk(false);
            throw error;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowLoading(true);
       try {
        await userLogin(email, password);
        setShowLoading(false);
        push('/admin');
       } catch (error) {
           console.error('Erro ao fazer login', error.message);
           setShowLoading(false);
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
                        value={email}
                        onChange={handleEmail}
                        onFocus={() => setIsEmailInvalid(false)}
                    />
                    {isEmailInvalid && <p className={style.error}>E-mail inváido</p>}
                    <Password
                        value={password}
                        onChange={handlePassword}
                        onFocus={() => setIsPasswordInvalid(false)}
                        placeholder='Senha'
                    />
                    {isPasswordInvalid && <p className={style.error}>Senha inválida</p>}
                    {
                        !loginOk && <p className={style.error}>E-mail ou senha inválidos</p>
                    }

                    <div className={style.option_user}>
                        <div className={style.option}>
                            <Link href="/forgotPassword">Esqueceu sua senha?</Link>
                        </div>
                    </div>
                    <button
                        type='button'
                        onClick={handleSubmit}
                    > {showLoading ? <Loading/> : 'Entrar'}
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
