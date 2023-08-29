import NewSchedule from '@/components/NewSchedule';
import ScheduleList from '@/components/ScheduleList';
import { ScheduleProvider } from '@/contexts/schedule_context';
import style from './page.module.scss';


export default function Admin() {
  return (
    <div className={style.adminPage}>
      <ScheduleProvider>
        <ScheduleList />
        <NewSchedule />
      </ScheduleProvider>
    </div>
  )
}