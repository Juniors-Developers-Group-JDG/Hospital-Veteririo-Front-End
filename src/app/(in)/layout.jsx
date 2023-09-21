import { redirect } from "next/navigation";
import { getCookie } from "../actions";
import { InnerHeader } from "./components/Header";
import { Sidebar } from "./components/Sidebar";


import { ScheduleProvider } from "@/contexts/schedule";
import { UserProvider } from "@/contexts/user";
import Styles from './layout.module.sass';

export default async function InnerLayout({ children }) {
  const isAuthenticated = await getCookie('username');

  if (!isAuthenticated) redirect('/login');

  return (
    <ScheduleProvider>
      <UserProvider>
        <div className={Styles.LayoutContainer}>
          <Sidebar />

          <div className={Styles.ContentContainer}>
            <InnerHeader />

            <main className={Styles.Main}>
              {children}
            </main>
          </div>
        </div>
      </UserProvider>
    </ScheduleProvider>
  )
}