'use client';
import ScheduleList from '@/components/ScheduleList/page.jsx';
import { useState } from 'react';
import style from './page.module.scss';
import NewSchedule from '@/components/NewSchedule/page';

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
          <ScheduleList />
          <NewSchedule />
        </div>
        :
          window.location.href = '/login'
      } 
    </div>
  )
}