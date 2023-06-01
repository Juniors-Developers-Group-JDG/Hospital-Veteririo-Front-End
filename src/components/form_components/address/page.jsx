import Style from "../styles.sass";

export default function Address({ address, setAddress }) {
  return (
    <>
      <label htmlFor="address" className={`${Style.label} label`}>
        Logradouro
      </label>
      <input
        value={address}
        type="text"
        name="address"
        id="address"
        className={`${Style.input} input`}
        onChange={(event) => setAddress(event.target.value)}
      />
    </>
  );
}
