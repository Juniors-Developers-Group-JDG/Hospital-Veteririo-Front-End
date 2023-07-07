'use client';
import scheduleMock from '@/utils/scheduleMock';
import { createContext, useState } from 'react';

const ScheduleContext = createContext({});

export function ScheduleProvider({ children }) {
  const [showScheduleDetails, setShowScheduleDetails] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState({});
  const [selectedUserName, setSelectedUserName] = useState('');
  const [selectedPetName, setSelectedPetName] = useState('');
  const [petNamesArray, setPetNamesArray] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [ selectedDate, setSelectedDate ] = useState('');
  const [ selectedTime, setSelectedTime ] = useState('');
  const [ newSchedule, setNewSchedule ] = useState({});
  const [schedule, setSchedule] = useState(scheduleMock);
  
  const providerData = {
   showScheduleDetails,
   setShowScheduleDetails,
   selectedSchedule,
   setSelectedSchedule,
    selectedUserName,
    setSelectedUserName,
    petNamesArray,
    setPetNamesArray,
    selectedSpecialty,
    setSelectedSpecialty,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    selectedPetName,
    setSelectedPetName,
    newSchedule,
    setNewSchedule,
    schedule,
    setSchedule,
  }

  return (
    <ScheduleContext.Provider value={providerData}>
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleContext;