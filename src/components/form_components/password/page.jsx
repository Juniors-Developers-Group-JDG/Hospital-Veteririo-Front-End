import style from './password.module.scss';

export default function Password({ password, setPassword }) {
  return (
      <div className={style.box}>
        <input
          type="password"
          placeholder='Digite sua senha'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
    
  );
}
