'use client'

import { useSchedule } from '@/hooks/useSchedule';
import { isSameDay } from 'date-fns';
import { formatInTimeZone, zonedTimeToUtc } from 'date-fns-tz';
import { pt } from 'date-fns/locale';
import { useMemo, useState } from 'react';
import DatePicker from "react-datepicker";
import { FaCat } from 'react-icons/fa';
import { GiSittingDog } from 'react-icons/gi';
import { ScheduleDetails } from '../ScheduleDetails';
import style from './ScheduleList.module.scss';

export const ScheduleList = () => {
  const [showScheduleDetails, setShowScheduleDetails] = useState(false);

  const [selectedDatetime, setSelectedDatetime] = useState(null);

  const { schedules, selectScheduleById } = useSchedule();
  
  const filteredSchedules = useMemo(() => {
    if(selectedDatetime) {
      return schedules.filter(schedule => isSameDay(zonedTimeToUtc(schedule.scheduleDate), selectedDatetime))
    }

    return schedules
  }, [schedules, selectedDatetime])

  const handleScheduleItemClick = (scheduleId) => {
    selectScheduleById(scheduleId);
    setShowScheduleDetails(true);
  };
 
  return (
   <section className={style.fullComponent}>
    <div className={style.topDiv}>
      <div className={ style.containerTitle}>
        <h1>Agendamentos</h1>
      </div>
      <div 
        className={ style.containerFilter}
      >
        <DatePicker
          locale={pt}
          selected={selectedDatetime}
          onChange={(date) => setSelectedDatetime(date)}
          dateFormat="dd/MM/yyyy"
          showIcon
          placeholderText="dd/mm/aaaa"
        />
        <button
          type='button'
          onClick={() => setSelectedDatetime(null)}
        >Limpar filtros</button>
      </div>
    </div>
    <ul className={style.scheduleList}>
       {
        filteredSchedules.length > 0 
          ?
          filteredSchedules
            .map((schedule, index) => {
              const date = formatInTimeZone(schedule.scheduleDate, "UTC", 'dd/MM/yyyy');
              const time = formatInTimeZone(schedule.scheduleDate, "UTC", 'HH:mm');
              return (
                <li
                  key={index} 
                  className={style.scheduleItem}
                  onClick={() => handleScheduleItemClick(schedule["_id"])}
                >
                  <div className={ style.scheduleInfoLeft}>
                      { schedule.specie?.length > 0 && schedule.specie === 'Cachorro' ? <GiSittingDog className={style.scheduleIcon}/> : <FaCat className={ style.scheduleIcon}/>}
                    <p
                      className={ style.petName}
                    >{schedule.petName}</p>
                    <p
                      className={ style.clientName}
                    >{schedule.name.name}</p>
                  </div>
                  <div className={ style.scheduleInfoRight}>
                    <p>{date}</p>
                    <p>{schedule.time}{time}</p>
                  </div>
                </li>
              )
            })
          :
            <li>Nenhum agendamento encontrado!</li>
       }
    {
      showScheduleDetails  && <ScheduleDetails onClose={() => setShowScheduleDetails(false)} />
    }
    </ul>
    </section>
  );
}