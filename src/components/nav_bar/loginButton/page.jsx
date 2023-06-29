"use client"

import Link from "next/link";
import style from "../NavBar.module.scss"

export default function LoginButton(){
  if(!localStorage.getItem('isAuthenticated')) {
    return (
      <Link className={style.login}
            href="/login"
            onClick={() => {
              window.location.href = '/login'
            }}
          >
            Login
      </Link>
    )
  }
  return (
    <Link className={style.login}
      href="#"
      onClick={() => {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
    }}
      > 
      Logout
      </Link>
  )
}