import style from "./phone.module.scss";

export default function PhoneNumber({ number, setNumber }) {
  return (
    <div className={style.box}>
      <input
        type="tel"
        name="phone_number"
        id="phone_number"
        placeholder="Telefone"
        onChange={(event) => setNumber(event.target.value)}
      />
    </div>
    
    
  );
}
