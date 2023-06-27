import style from "./confirm_pass.module.scss";

export default function ConfirmPassword({
  confirmPassword,
  setConfirmPassword,
}) {
  return (
    <div className={style.box}>
      <input
        name="confirm_password"
        id="confirm_password"
        type="password"
        value={confirmPassword}
        placeholder="Confirme sua senha"
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
    </div>
  );
}

