import AuthContext from '../../../app/contexts/auth_context/AuthContext';
import style from "./email.module.scss";
import { useContext } from 'react';

export default function Email() {
  const { email, setEmail } = useContext(AuthContext);
  return (
    <div className={style.box}>
      
      <input
        value={email}
        type="email"
        placeholder="E-mail"
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
  
  );
}
