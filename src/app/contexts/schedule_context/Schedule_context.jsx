'use client';
import { createContext, useState } from 'react';

const ScheduleContext = createContext({});

export function ScheduleProvider({ children }) {
  const [showScheduleDetails, setShowScheduleDetails] = useState(false);

  const [selectedSchedule, setSelectedSchedule] = useState({});

  const providerData = {
   showScheduleDetails,
   setShowScheduleDetails,
   selectedSchedule,
   setSelectedSchedule,
  }

  return (
    <ScheduleContext.Provider value={providerData}>
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleContext;