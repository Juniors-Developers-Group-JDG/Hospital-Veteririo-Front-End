import style from "./cep.module.scss";

export default function Cep({ cep, setCep }) {
  return (
    <div className={style.box}>
      <input
        value={cep}
        type="text"
        name="cep"
        placeholder="CEP"
        onChange={(event) => setCep(event.target.value)}
      />
    </div>
    
  );
}
