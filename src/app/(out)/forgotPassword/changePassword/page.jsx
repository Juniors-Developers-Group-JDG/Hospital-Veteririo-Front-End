"use client";
import Password from "@/components/form_components/password";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./changePassword.module.scss";

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const { push } = useRouter();

  const userPassword = {
    password: '1Bruno12345!'
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
    setFormError('');
  }

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
    setFormError('');
  }

  const validateForm = () => {
    let errorMessage = '';

    if (newPassword === userPassword.password) {
      const shouldChangePassword = window.confirm(
        'Isso é a sua senha atual, deseja realmente alterá-la?'
      );

      if (!shouldChangePassword) {
        setIsValid(false);
        setFormError('');
        return false; 
      }
    }

    if (newPassword !== confirmNewPassword) {
      errorMessage = 'As senhas não coincidem';
      setIsValid(false);
    } else if (newPassword.length < 8) {
      errorMessage = 'A senha deve ter pelo menos 8 caracteres';
      setIsValid(false);
    } else if (!/[A-Z]/.test(newPassword)) {
      errorMessage = 'A senha deve ter pelo menos 1 letra maiúscula';
      setIsValid(false);
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      errorMessage = 'A senha deve ter pelo menos 1 caractere especial';
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    setFormError(errorMessage);
    return isValid;
  };

  const handleChangePassword = () => {
    if (validateForm()) {
      push('/login'); 
    }
  }

  return (
    <main className={style.main}>
      <div className={style.box_login}>
        <div className={style.title}>
          <h2>Trocar senha</h2>
        </div>

        <form className={style.form}>
          <div className={style.form_inputs_container}>
            <Password
              value={newPassword}
              placeholder="Digite sua nova senha"
              onChange={handleNewPasswordChange}
            />
            {formError && <p className={style.error}>{formError}</p>}
            
            <Password
              value={confirmNewPassword}
              placeholder="Confirme sua nova senha"
              onChange={handleConfirmNewPasswordChange}
            />
            {newPassword !== confirmNewPassword && <p className={style.error}>As senhas não coincidem</p>}
          </div>

          <button type='button' onClick={handleChangePassword}>
            Alterar senha
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
