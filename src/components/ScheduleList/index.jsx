import ScheduleContext from '@/contexts/schedule_context';
import scheduleMock from '@/utils/scheduleMock';
import { useContext } from 'react';
import { FaCat } from 'react-icons/fa';
import { GiSittingDog } from 'react-icons/gi';
import ScheduleDetails from '../ScheduleDetails';
import style from './ScheduleList.module.scss';


const ScheduleList = () => {
  const {
      showScheduleDetails,
      setShowScheduleDetails,
      setSelectedSchedule,
      selectedUserName,
      setSelectedUserName,
      selectedPetName,
      setSelectedPetName,
      selectedSpecialty,
      setSelectedSpecialty,
      selectedDateTime,
      setSelectedDateTime,
      NewSchedule,
      schedule,
      setSchedule,
    } = useContext(ScheduleContext);
  
  const filterDate = (event) => {
    const date = event.target.value;
    const filteredSchedule = scheduleMock.filter((schedule) => {
      return schedule.date === date;
    });
    setSchedule(filteredSchedule);
  };

  const handleScheduleDetails = (schedule) => {
    setShowScheduleDetails(true);
    setSelectedSchedule(schedule);
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
         schedule
         .sort((a, b) => {
            if (a.date < b.date) {
              return 1;
            }
            if (a.date > b.date) {
              return -1;
            }
            return 0;
          })
         .map((eachSchedule, index) => {
          const date = eachSchedule.date.split('-').reverse().join('/');
           return (
             <li
              key={index} 
              className={ style.scheduleItem}
              onClick={() => handleScheduleDetails(eachSchedule)}
            >
               <div className={ style.scheduleInfoLeft}>
                  { eachSchedule.specie === 'Cachorro' ? <GiSittingDog className={ style.scheduleIcon}/> : <FaCat className={ style.scheduleIcon}/>}
                <p
                  className={ style.petName}
                >{eachSchedule.pet}</p>
                <p
                  className={ style.clientName}
                >{eachSchedule.clientName}</p>
               </div>
               <div className={ style.scheduleInfoRight}>
                <p>{date}</p>
                <p>{eachSchedule.time}h</p>
               </div>
             </li>
           )
         })
       }
    {
      showScheduleDetails  && <ScheduleDetails schedule={schedule } setSchedule={setSchedule}/>
    }
    </ul>
    </section>
  );
}

export default ScheduleList;