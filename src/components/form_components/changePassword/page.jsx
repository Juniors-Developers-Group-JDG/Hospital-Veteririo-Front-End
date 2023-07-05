import React, { useState } from 'react';
import style from './changePassword.module.scss';

export default function AlteredPassword({
                                            newPassword,
                                            setNewPassword,
                                            confirmNewPassword,
                                            setConfirmNewPassword,
                                        }) {
    const userPassword = {
        senha: '1Bruno12!',
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        let error = '';

        if (password.length < minLength) {
            error = 'A senha deve ter pelo menos 8 caracteres';
        } else if (!hasUppercase) {
            error = 'A senha deve ter pelo menos 1 letra maiúscula';
        } else if (!hasSpecialChar) {
            error = 'A senha deve ter pelo menos 1 caractere especial';
        }

        return error;
    };

    const handleNewPasswordChange = (event) => {
        const password = event.target.value;
        const error = validatePassword(password);
        setNewPassword(password);
        setNewPasswordError(error);

        if (password === userPassword.senha) {
            setFormError('Essa é a mesma senha da anterior, tem certeza que quer mantê-la?');
        } else {
            setFormError('');
        }
    };

    const handleConfirmNewPasswordChange = (event) => {
        const password = event.target.value;
        setConfirmNewPassword(password);
        setPasswordsMatch(password === newPassword);
    };

    const [newPasswordError, setNewPasswordError] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [formError, setFormError] = useState('');

    return (
        <div className={style.box}>
            <input
                value={newPassword}
                type="password"
                placeholder="Digite sua nova senha"
                onChange={handleNewPasswordChange}
            />
            {(newPasswordError || formError) && (
                <p className={style.error}>
                    {newPasswordError || formError}
                </p>
            )}
            <input
                value={confirmNewPassword}
                type="password"
                placeholder="Confirme sua nova senha"
                onChange={handleConfirmNewPasswordChange}
            />
            {!passwordsMatch && confirmNewPassword && (
                <p className={style.error}>As senhas não coincidem</p>
            )}
        </div>
    );
}
