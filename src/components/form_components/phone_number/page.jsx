import { IMaskInput } from "react-imask";
import Style from "../styles.sass";

export default function PhoneNumber({ number, setNumber }) {
  return (
    <>
      <label htmlFor="phone_number" className={`${Style.label} label`}>
        Telefone
      </label>
      <IMaskInput
        type="tel"
        name="phone_number"
        id="phone_number"
        mask="(00) 00000-0000"
        placeholder={`(xx) xxxxx-xxxx`}
        onChange={(event) => setNumber(event.target.value)}
        className={`${Style.input} input input-phone`}
      />
    </>
  );
}
