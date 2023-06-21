import React, { useContext, useState } from 'react';
import style from './ScheduleDetails.module.scss';
import ScheduleContext from '../../app/contexts/schedule_context/Schedule_context';

const ScheduleDetails = ({schedule, setSchedule}) => {

 const {
  setShowScheduleDetails,
  setSelectedSchedule,    
  selectedSchedule
} = useContext(ScheduleContext);

const handleChangeInput = (event) => {
  const { name, value } = event.target;
  setSelectedSchedule({
    ...selectedSchedule,
    [name]: value,
  });
};

//criando uma função para salvar o agendamento editado dentro do estado schedule recebido como props

const saveEditedSchedule = () => {
  const newSchedule = schedule.map((eachSchedule) => {
    if (eachSchedule.id === selectedSchedule.id) {
      return selectedSchedule;
    }
    return eachSchedule;
  });
  setSchedule(newSchedule);
  setShowScheduleDetails(false);
  setSelectedSchedule({});
}

 return (
  <section className={style.fullComponent}>
    <form
    className={style.form}
   >
    <div>
      <input
        type="text"
        name="clientName"
        id="clientName"
        value={ selectedSchedule.clientName }
        onChange={handleChangeInput}
      /> 
      <input type="text" value={selectedSchedule.pet} name='pet' id='pet' onChange={handleChangeInput}/>
     </div>
     <div>
      <input type="date" value={selectedSchedule.date} name='date' id='date'onChange={handleChangeInput}/>
      <input type="time" value={selectedSchedule.time} name='time' id='time'onChange={handleChangeInput}/>
     </div>
     <div>
      <input type="text" value={selectedSchedule.speciality} name='speciality' id='speciality'onChange={handleChangeInput}/>
      <textarea name="notes" id="notes" cols="30" rows="5" value={selectedSchedule.notes} onChange={handleChangeInput}></textarea>
     </div>
     <p
      className={style.close}
      onClick={() => {
       setShowScheduleDetails(false);
       setSelectedSchedule({});
      }}
     >X</p>
   </form>
   <div className={style.buttons}>
    <button
      type='button'
      onClick={saveEditedSchedule}
    >
     Salvar
    </button>
    <button>
     Cancelar agendamento
    </button>
   </div>
  </section>
 );
};

export default ScheduleDetails;