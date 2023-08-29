import { redirect } from "next/navigation";
import NavBar from "../../components/nav_bar";
import { getCookie } from "../actions";

export default function RootLayout({ children }) {
  const isAuthenticated = getCookie('username');

  if (isAuthenticated) redirect('/admin');

  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
