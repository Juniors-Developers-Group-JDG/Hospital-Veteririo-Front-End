import Style from "../styles.sass";

export default function PhoneNumber({ number, setNumber }) {
  return (
    <>
      <label htmlFor="phone_number" className={`${Style.phone_number} label`}>
        Telefone
      </label>
      <input
        type="tel"
        name="phone_number"
        id="phone_number"
        pattern="^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$"
        placeholder={`(xx) xxxxx-xxxx`}
        onChange={(event) => setNumber(event.target.value)}
        className={`${Style.label_input} label-input label-input-phone`}
      />
    </>
  );
}
