import AuthContext from '@/app/auth_context/AuthContext';
import style from "./username.module.scss";
import { useContext } from 'react';

export default function Name() {
  const { username, setUsername } = useContext(AuthContext);
  return (
    <div className={style.box}>
      
      <input
        value={username}
        type="text"
        placeholder="Nome"
        onChange={(event) => setUsername(event.target.value)}
      />
    </div>
  
  );
}
