
import Link from "next/link";
import style from "./loginButton.module.scss"

export default function LoginButton(){
  const isauth = localStorage.getItem('username');// Verificando se tem algum usuario logado para alternar entre login ou loggoff
  if(!isauth) {
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
      localStorage.removeItem('username');
    }}
      > 
      Logout
      </Link>
  )
}