'use client';

import { getCookie } from "@/app/actions";
import { isSameDay, isSameMonth } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import { useCallback, useEffect, useMemo, useState } from "react";

const { createContext } = require("react");

export const scheduleContext = createContext({});

export function ScheduleProvider({ children }) {
  const [schedules, setSchedules] = useState([]);
  const [selectedScheduleId, setSelectedScheduleId] = useState('');
  const [shouldRefetchSchedules, setShouldRefetchSchedules] = useState(true);

  const [token, setToken] = useState('');

  const selectedSchedule = useMemo(() => selectedScheduleId ? schedules.find(schedule => schedule["_id"] === selectedScheduleId) : undefined , [schedules, selectedScheduleId])

  const scheduledDates = useMemo(() => schedules.map(schedule => utcToZonedTime(schedule.scheduleDate, "UTC")), [schedules]);

  const monthTotalSchedules = useMemo(() => schedules 
    ? 
      schedules.filter(schedule => {
        const utcToday = zonedTimeToUtc(new Date()); 
        return isSameMonth(zonedTimeToUtc(new Date(schedule.scheduleDate)), utcToday)
      }).length
    : 
      0, 
    [schedules],
  )

  const monthTotalCanceledSchedules = useMemo(() => schedules 
    ? 
      schedules.filter(schedule => {
        const utcToday = zonedTimeToUtc(new Date()); 
        return schedule.closed && isSameMonth(zonedTimeToUtc(new Date(schedule.scheduleDate)), utcToday)
      }).length
    : 
      0, 
    [schedules],
  )

  const todayTotalSchedules = useMemo(() => schedules 
    ? 
      schedules.filter(schedule => {
        const utcToday = zonedTimeToUtc(new Date()); 
        return isSameDay(zonedTimeToUtc(new Date(schedule.scheduleDate)), utcToday)
      }).length
    : 
      0, 
    [schedules],
  )

  const refetchSchedules = useCallback(() => setShouldRefetchSchedules(true), [])

  useEffect(() => {
    getCookie('token').then(cookie => setToken(cookie));
  }, [])

  useEffect(() => {
    if(token && shouldRefetchSchedules) {
      fetch('https://jdg-site-vet.onrender.com/schedules/getAll', { 
        method: 'GET', 
        headers: {
          Authorization: `Bearer ${token}`
        } 
      })
      .then(res => res.json())
      .then(data => {
        setSchedules(data.sort((a, b) => {
          if (a.date < b.date) {
            return -1;
          }
          if (a.date > b.date) {
            return 1;
          }
          return 0;
        }))

        setShouldRefetchSchedules(false)
      })
      .catch(err => {
        console.error(err);

        setShouldRefetchSchedules(false)
      })
    }
  }, [token, shouldRefetchSchedules])
  
  return (
    <scheduleContext.Provider value={{schedules, monthTotalSchedules, monthTotalCanceledSchedules, todayTotalSchedules, selectScheduleById: setSelectedScheduleId, selectedSchedule, scheduledDates, refetchSchedules}}>
      {children}
    </scheduleContext.Provider>
  )
}