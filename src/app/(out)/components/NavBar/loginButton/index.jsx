'use client'

import Link from "next/link";
import { useEffect, useState } from 'react';
import { deleteCookie, getCookie } from '../../../../actions';
import style from "./loginButton.module.scss";


export function LoginButton(){
  const [isAuth, setIsAuth] = useState(false)

  console.log({isAuth})

  useEffect(() => {
    getCookie('username').then(cookie => setIsAuth(!!cookie));
  }, [])
  
  return (
    <Link className={style.login}
      href={isAuth ? '#' : '/login'}
      onClick={() => {
        if(isAuth)
          deleteCookie('username');
          deleteCookie('token');
          return;
    }}
      > 
      {isAuth ? 'Logout' : 'Login'}
      </Link>
  )
}