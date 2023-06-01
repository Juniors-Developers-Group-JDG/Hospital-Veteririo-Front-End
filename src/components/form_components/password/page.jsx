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
        className={`${Style.input} input`}
        onChange={(event) => setPassword(event.target.value)}
      />
    </>
  );
}
