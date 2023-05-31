import Style from "../styles.sass";
import { IMaskInput } from "react-imask";

export default function Cep({ cep, setCep }) {
  return (
    <>
      <label htmlFor="cep" className={`${Style.label} label`}>
        CEP
      </label>
      <IMaskInput
        value={cep}
        type="text"
        mask="00000-000"
        name="cep"
        id="cep"
        className={`${Style.input} input`}
        onChange={(event) => setCep(event.target.value)}
      />
    </>
  );
}
