import scheduleMock from '../../utils/scheduleMock';
import React from 'react';
import { GiSittingDog } from 'react-icons/gi';
import { FaCat } from 'react-icons/fa';
import style from './ScheduleList.module.scss'

const ScheduleList = () => {

  const [schedule, setSchedule] = React.useState(scheduleMock);

  const filterDate = (event) => {
    const date = event.target.value;
    const filteredSchedule = scheduleMock.filter((schedule) => {
      return schedule.date === date;
    });
    setSchedule(filteredSchedule);
  };

  
  return (
   <section className={style.fullComponent}>
    <div className={style.topDiv}>
      <h1>Agendamentos</h1>
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
    <ul className={style.scheduleList}>
       {
         schedule.map((schedule, index) => {
          const date = schedule.date.split('-').reverse().join('/');
           return (
             <li key={index} className={ style.scheduleItem}>
               <div className={ style.scheduleInfoLeft}>
                  { schedule.specie === 'Cachorro' ? <GiSittingDog className={ style.scheduleIcon}/> : <FaCat className={ style.scheduleIcon}/>}
                <p>{schedule.pet}</p>
                <p>{schedule.clientName}</p>
               </div>
               <div className={ style.scheduleInfoRight}>
                <p>{date}</p>
                <p>{schedule.time}h</p>
               </div>
             </li>
           )
         })
       }
      </ul>
    </section>
  );
}

export default ScheduleList;