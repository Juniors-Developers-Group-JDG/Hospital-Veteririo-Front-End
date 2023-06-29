'use client';
import { useState, useContext } from 'react';
import style from './forgotPassword.module.scss';
import Email from '@/components/form_components/email/page';
import AuthContext from '../contexts/auth_context/AuthContext';

export default function ForgotPassword() {
    const { email } = useContext(AuthContext);
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const userAccessEmail = 'admin@teste.com.br';
        if (email !== userAccessEmail) {
            setIsEmailInvalid(true);
        } else {
            setIsEmailInvalid(false);
            console.log('Form submitted');
            window.location.href = '/login';
        }
    };

    return (
        <main className={style.main}>
            <div className={style.title}>
                <h2>Recuperar senha</h2>
            </div>

            <div className={style.group}>
                <div className={style.title}>
                    <p>
                        Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.
                    </p>
                </div>
                <form>
                    <div className={style.box}>
                        <Email email={email} />
                    </div>
                    {isEmailInvalid && <p className={style.error}>E-mail inválido</p>}
                    <button onClick={(event) => handleSubmit(event)}>Próximo</button>
                </form>
            </div>
        </main>
    );
}
