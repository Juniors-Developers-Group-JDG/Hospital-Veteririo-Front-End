import Style from "../styles.sass";

export default function Password({ password, setPassword }) {
  return (
    <>
      <label htmlFor="password" className={`${Style.label} label`}>
        Senha
      </label>
      <input
        name="password"
        id="password"
        type="password"
        value={password}
        className={`${Style.label_input} label-input`}
        onChange={(event) => setPassword(event.target.value)}
      />
    </>
  );
}
