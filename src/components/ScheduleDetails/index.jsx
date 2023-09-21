'use client'

import { useSchedule } from '@/hooks/useSchedule';
import { isSameDay } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { pt } from 'date-fns/locale';
import { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { CgCloseO } from 'react-icons/cg';
import style from './ScheduleDetails.module.scss';

export const ScheduleDetails = ({onClose}) => {
  const { selectedSchedule, scheduledDates, selectScheduleById } = useSchedule()

  const [selectedDatetime, setSelectedDatetime] = useState(null);

  const selectedDateScheduledTimes = useMemo(() => {
    return scheduledDates.filter(scheduledDate => isSameDay(selectedDatetime, zonedTimeToUtc(scheduledDate))).map(scheduledDate => {
      const newDate = new Date(scheduledDate)

      const minutes = newDate.getMinutes()

      minutes < 30 ? newDate.setMinutes(0) : newDate.setMinutes(30)

      return newDate;
    })
  }, [scheduledDates, selectedDatetime])

  const handleChangeInput = (event) => {
  };

  const saveEditedSchedule = () => {
  }

  const cancelSchedule = () => {
  };

  const confirmCancelSchedule = () => {
  };

  useEffect(() => {
    if(selectedSchedule) {
      setSelectedDatetime(utcToZonedTime(selectedSchedule.scheduleDate, 'UTC'))
    }
  }, [selectedSchedule])

  console.log({selectedSchedule})

  return (
    selectedSchedule &&
      <section className={style.scheduleDetailContainer}>
        <form className={style.form}>
        <div className={ style.boxLine}>
          <div className={style.boxInput}>
            <label htmlFor="clientName">Nome do cliente</label>
            <input
              type="text"
              name="clientName"
              id="clientName"
              value={ selectedSchedule.name[0].name }
              
            />
          </div>
          <div className={style.boxInput}>
            <label htmlFor="petName">Nome do Pet</label>
            <input type="text" value={selectedSchedule.petName} name='pet' id='pet'/>
          </div>
        </div>
        <div className={ style.boxLine}>
        <div className={style.boxInput}>
            <label htmlFor="date">Data</label>
            <DatePicker 
              id="datetime"
              locale={pt} 
              timeCaption='Horário' 
              selected={selectedDatetime}
              onChange={(date) => setSelectedDatetime(date)}
              dateFormat="Pp"
              timeFormat="p"
              excludeTimes={selectedDateScheduledTimes}
              showIcon 
              showTimeSelect 
              required
            />
          </div>
        </div>
        <div className={ style.boxLine}>
          <div className={style.boxInput}>
            <label htmlFor="specialty">Especialidade</label>
            <input type="text" value={selectedSchedule.specialty} name='specialty' id='specialty'/>
          </div>
        </div>
        <p
          className={style.close}
          onClick={() => {
            onClose();
            selectScheduleById('');
          }}
        >
          <CgCloseO />
        </p>
      </form>
      <div className={style.buttons}>
        <button
          type='button'
          onClick={saveEditedSchedule}
        >
        Salvar
        </button>
        <button
          type='button'
          onClick={confirmCancelSchedule}
        >
        Cancelar agendamento
        </button>
      </div>
      </section>
  );
};