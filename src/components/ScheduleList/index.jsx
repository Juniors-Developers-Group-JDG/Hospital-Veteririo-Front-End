'use client'

import { useSchedule } from '@/hooks/useSchedule';
import scheduleMock from '@/utils/scheduleMock';
import { useState } from 'react';
import { FaCat } from 'react-icons/fa';
import { GiSittingDog } from 'react-icons/gi';
import { ScheduleDetails } from '../ScheduleDetails';
import style from './ScheduleList.module.scss';

export const ScheduleList = () => {
  const [showScheduleDetails, setShowScheduleDetails] = useState(false);

  const { schedules, selectScheduleById } = useSchedule();

  const filterDate = (event) => {
    const date = event.target.value;
    const filteredSchedule = scheduleMock.filter((schedule) => {
      return schedule.date === date;
    });
    setSchedule(filteredSchedule);
  };

  const handleScheduleItemClick = (scheduleId) => {
    setShowScheduleDetails(true);
    selectScheduleById(scheduleId);
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
        <input
        type="date" 
        name="filtrar"
        id="filtrar"
        placeholder="Selecione uma data"
        onChange={filterDate}
        />
        <button
          type='button'
          onClick={() => setSchedule(scheduleMock)}
        >Limpar filtros</button>
      </div>
    </div>
    <ul className={style.scheduleList}>
       {
        schedules.length > 0 
          ?
            schedules
            .map((schedule, index) => {
              const date = schedule.date.split('-').reverse().join('/');
              return (
                <li
                  key={index} 
                  className={style.scheduleItem}
                  onClick={() => handleScheduleItemClick(schedule.id)}
                >
                  <div className={ style.scheduleInfoLeft}>
                      { schedule.specie === 'Cachorro' ? <GiSittingDog className={style.scheduleIcon}/> : <FaCat className={ style.scheduleIcon}/>}
                    <p
                      className={ style.petName}
                    >{schedule.pet}</p>
                    <p
                      className={ style.clientName}
                    >{schedule.clientName}</p>
                  </div>
                  <div className={ style.scheduleInfoRight}>
                    <p>{date}</p>
                    <p>{schedule.time}h</p>
                  </div>
                </li>
              )
            })
          :
            <li>Nenhum agendamento encontrado!</li>
       }
    {
      showScheduleDetails  && <ScheduleDetails />
    }
    </ul>
    </section>
  );
}