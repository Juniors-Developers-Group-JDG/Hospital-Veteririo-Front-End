import styles from "./footer.module.sass";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Desenvolvido por <a href='https://jdg-webpage.vercel.app/'>JDG - Juniors Developers Group</a></h2>
      <h3>Todos os direitos reservados ® - 2023</h3>
    </footer>
  );
}
