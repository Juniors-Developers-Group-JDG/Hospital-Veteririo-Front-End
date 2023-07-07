import style from "./address.module.scss";

export default function Address({ address, setAddress }) {
  return (
    <div className={style.box}>
      <input
        value={address}
        type="text"
        name="address"
        id="address"
        placeholder="Logradouro"
        onChange={(event) => setAddress(event.target.value)}
      />
    </div>
  
  );
}
