'use client';
// import NewSchedule from '@/';
import NewSchedule from '@/components/NewSchedule';
import ScheduleList from '@/components/ScheduleList';
import { ScheduleProvider } from '@/contexts/schedule_context';
import { useState } from 'react';
import style from './page.module.scss';

export default function Admin() {
  const [ auth, _setAuth ] = useState(
    localStorage.getItem('isAuthenticated') || false
  );
  return (
    <div>
      {
        auth
        ? 
        <div className={style.adminPage}>
          <ScheduleProvider>
            <ScheduleList />
            <NewSchedule />
          </ScheduleProvider>
        </div>
        :
          window.location.href = '/login'
      } 
    </div>
  )
}