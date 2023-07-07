import NewSchedule from '@/components/NewSchedule';
import ScheduleList from '@/components/ScheduleList';
import { ScheduleProvider } from '@/contexts/schedule_context';
import style from './page.module.scss';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Admin() {
  const isAuthenticated = cookies().get('vet.authenticated')?.value;

  if (!isAuthenticated) redirect('/login')

  return (
    <div className={style.adminPage}>
      <ScheduleProvider>
        <ScheduleList />
        <NewSchedule />
      </ScheduleProvider>
    </div>
  )
}