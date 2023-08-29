import NavBar from "../../components/nav_bar/page";

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
