import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>Desenvolvido por <a href='https://jdg-webpage.vercel.app/' target="_blank">JDG - Juniors Developers Group</a></h3>
      <h4>Todos os direitos reservados ® - 2023</h4>
    </footer>
  );
}
