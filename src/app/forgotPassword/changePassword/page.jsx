"use client";
import React, { useState } from 'react';
import AlteredPassword from '@/components/form_components/changePassword/page';
import style from './changePassword.module.scss';
import Image from 'next/image';

export default function ChangePassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [formError, setFormError] = useState('');

    const validateForm = () => {
        if (newPassword !== confirmNewPassword) {
            setFormError('As senhas não coincidem');
            return false;
        }
        if (newPassword.length < 8) {
            setFormError('A senha deve ter pelo menos 8 caracteres');
            return false;
        }
        if (!/[A-Z]/.test(newPassword)) {
            setFormError('A senha deve ter pelo menos 1 letra maiúscula');
            return false;
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
            setFormError('A senha deve ter pelo menos 1 caractere especial');
            return false;
        }
        setFormError('');
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            window.location.href = '/login';
        }
    };

    return (
        <main className={style.main}>
            <div className={style.box_login}>
                <div className={style.title}>
                    <h2>Trocar senha</h2>
                </div>

                <form className={style.form}>
                    <AlteredPassword
                        newPassword={newPassword}
                        setNewPassword={setNewPassword}
                        confirmNewPassword={confirmNewPassword}
                        setConfirmNewPassword={setConfirmNewPassword}
                    />

                    <button type="button" onClick={handleSubmit}>
                        Alterar senha
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
