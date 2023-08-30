'use client';

import { getCookie } from "@/app/actions";
import { isSameDay, isSameMonth } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import { useEffect, useMemo, useState } from "react";

const { createContext } = require("react");

export const scheduleContext = createContext({});

export function ScheduleProvider({ children }) {
  const [schedules, setSchedules] = useState();

  const [token, setToken] = useState('');

  const monthTotalSchedules = useMemo(() => schedules 
    ? 
      schedules.filter(schedule => {
        const utcToday = zonedTimeToUtc(new Date()); 
        return isSameMonth(schedule.scheduleDate, utcToday)
      }).length
    : 
      0, 
    [schedules],
  )

  const todayTotalSchedules = useMemo(() => schedules 
    ? 
      schedules.filter(schedule => {
        const utcToday = zonedTimeToUtc(new Date()); 
        return isSameDay(schedule.scheduleDate, utcToday)
      }).length
    : 
      0, 
    [schedules],
  )

  useEffect(() => {
    getCookie('token').then(cookie => setToken(cookie));
  }, [])

  useEffect(() => {
    if(token) {
      fetch('https://jdg-site-vet.onrender.com/schedules/getAll', { 
        method: 'GET', 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      })
      .then(res => res.json())
      .then(data => setSchedules(data.sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      })));
    }
  }, [token])
  
  return (
    <scheduleContext.Provider value={{schedules, monthTotalSchedules, todayTotalSchedules}}>
      {children}
    </scheduleContext.Provider>
  )
}