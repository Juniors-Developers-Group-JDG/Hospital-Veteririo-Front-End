import Style from "../../styles.sass";

export default function ConfirmPassword({
  confirmPassword,
  setConfirmPassword,
}) {
  return (
    <>
      <label htmlFor="confirm_password" className={`${Style.label} label`}>
        Confirme sua senha
      </label>
      <input
        name="confirm_password"
        id="confirm_password"
        type="password"
        value={confirmPassword}
        className={`${Style.label_input} label-input`}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
    </>
  );
}
