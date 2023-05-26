import Styles from "./styles.sass";

export default function Button({ handleSubmit }) {
  return (
    <button
      type="submit"
      className={`${Styles.button} button`}
      onSubmit={handleSubmit}
    >
      Cadastrar
    </button>
  );
}
