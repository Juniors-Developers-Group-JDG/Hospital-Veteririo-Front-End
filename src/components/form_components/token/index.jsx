import style from "./token.module.scss";

export default function Token({ token, setToken }) {
  return (
    <div className={style.box}>
      <input
        type="text"
        name="token"
        id="token"
        placeholder="Código de validação"
        onChange={(event) => setToken(event.target.value)}
      />
    </div>
    
    
  );
}
