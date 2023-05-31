import Styles from "./styles.sass";

export default function Button() {
  return (
    <button type="submit" className={`${Styles.button} button`}>
      Cadastrar
    </button>
  );
}
