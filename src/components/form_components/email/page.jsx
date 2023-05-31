import Style from "../styles.sass";

export default function Email({ email, setEmail }) {
  return (
    <>
      <label className={`${Style.label} label`} htmlFor="email">
        E-mail
      </label>
      <input
        value={email}
        type="email"
        className={`${Style.label_input} label-input`}
        name="email"
        id="email"
        onChange={(event) => setEmail(event.target.value)}
      />
    </>
  );
}
