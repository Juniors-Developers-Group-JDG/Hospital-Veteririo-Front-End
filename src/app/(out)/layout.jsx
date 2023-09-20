import { OuterNavBar } from "./components/NavBar";
import Styles from './OuterLayout.module.sass';

export default async function RootLayout({ children }) {
  return (
    <div className={Styles.OuterLayoutContainer}>
      <OuterNavBar />
      {children}
    </div>
  );
}
