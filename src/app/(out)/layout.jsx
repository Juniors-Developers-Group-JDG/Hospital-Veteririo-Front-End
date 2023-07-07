import NavBar from "../../components/nav_bar/page";

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
