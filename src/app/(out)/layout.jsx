import { OuterNavBar } from "./components/NavBar";

export default async function RootLayout({ children }) {
  return (
    <>
      <OuterNavBar />
      {children}
    </>
  );
}
