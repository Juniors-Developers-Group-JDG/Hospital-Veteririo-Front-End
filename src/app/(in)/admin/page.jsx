import NewSchedule from '@/components/NewSchedule';
import { ScheduleList } from '@/components/ScheduleList';
import style from './page.module.scss';

export default function Admin() {
  return (
    <div className={style.adminPage}>
      <ScheduleList />
      
      <NewSchedule />
    </div>
  )
}