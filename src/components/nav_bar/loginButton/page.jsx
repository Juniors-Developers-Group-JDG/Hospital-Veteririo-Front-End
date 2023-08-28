
import { deleteCookie, getCookie } from '@/app/actions';
import Link from "next/link";
import style from "./loginButton.module.scss";

export default function LoginButton(){
  const isauth = getCookie('username');
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
        deleteCookie('username');
    }}
      > 
      Logout
      </Link>
  )
}