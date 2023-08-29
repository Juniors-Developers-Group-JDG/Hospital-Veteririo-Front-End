import { redirect } from "next/navigation";
import { getCookie } from "../actions";
import { OuterNavBar } from "./components/NavBar";

export default function RootLayout({ children }) {
  const isAuthenticated = getCookie('username');

  if (isAuthenticated) redirect('/admin');

  return (
    <>
      <OuterNavBar />
      {children}
    </>
  );
}
