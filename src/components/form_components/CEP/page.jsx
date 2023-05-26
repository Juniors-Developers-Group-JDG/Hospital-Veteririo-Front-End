import Style from "../styles.sass";

export default function Cep({ cep, setCep }) {
  return (
    <>
      <label htmlFor="cep" className={`${Style.label} label`}>
        CEP
      </label>
      <input
        value={cep}
        type="text"
        name="cep"
        id="cep"
        className={`${Style.label_input} label-input`}
        onChange={(event) => setCep(event.target.value)}
      />
    </>
  );
}
