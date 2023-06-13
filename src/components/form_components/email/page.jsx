import style from "./email.module.scss";

export default function Email({ email, setEmail }) {
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
