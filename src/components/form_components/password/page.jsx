import { useContext } from 'react';
import style from './password.module.scss';
import AuthContext from '@/app/auth_context/AuthContext';

export default function Password() {
  const { password, setPassword } = useContext(AuthContext);
  return (
      <div className={style.box}>
        <input
          type="password"
          placeholder='Senha'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
    
  );
}
