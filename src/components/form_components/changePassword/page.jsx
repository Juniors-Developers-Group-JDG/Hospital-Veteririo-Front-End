import React, { useState } from 'react';
import style from './changePassword.module.scss';

export default function AlteredPassword({
                                            newPassword,
                                            setNewPassword,
                                            confirmNewPassword,
                                            setConfirmNewPassword,
                                        }) {
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
    };

    const handleConfirmNewPasswordChange = (event) => {
        const password = event.target.value;
        setConfirmNewPassword(password);
        setPasswordsMatch(password === newPassword);
    };

    const [newPasswordError, setNewPasswordError] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    return (
        <div className={style.box}>
            <input
                value={newPassword}
                type="password"
                placeholder="Digite sua nova senha"
                onChange={handleNewPasswordChange}
            />
            {newPasswordError && (
                <p className={style.error}>{newPasswordError}</p>
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
