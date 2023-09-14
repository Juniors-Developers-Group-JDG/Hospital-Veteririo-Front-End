'use client'

import { useContext } from "react";
import { scheduleContext } from "../contexts/schedule";

export function useSchedule() {
  const context = useContext(scheduleContext);

  if (!context)
    throw new Error('useSchedule must be used inside a ScheduleProvider');

  return context;
}