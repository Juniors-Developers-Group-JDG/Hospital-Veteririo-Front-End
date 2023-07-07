import style from "./email.module.scss";

export default function Email({...props}) {
  return (
    <div className={style.box}>
      <input
        {...props}
        type="email"
        placeholder="E-mail"
      />
    </div>
  );
}
