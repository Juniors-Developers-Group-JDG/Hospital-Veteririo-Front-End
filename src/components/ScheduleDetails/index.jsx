import ScheduleContext from '@/contexts/schedule_context';
import React, { useContext } from 'react';
import { CgCloseO } from 'react-icons/cg';
import style from './ScheduleDetails.module.scss';

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

const cancelSchedule = () => {
  const newSchedule = schedule.filter((eachSchedule) => {
    if (eachSchedule.id !== selectedSchedule.id) {
      return eachSchedule;
    }
  });
  setSchedule(newSchedule);
  setShowScheduleDetails(false);
  setSelectedSchedule({});
};

const confirmCancelSchedule = () => {
  const confirm = window.confirm('Tem certeza que deseja cancelar o agendamento?');
  if (confirm) {
    cancelSchedule();
  }
};

 return (
  <section className={style.scheduleDetailContainer}>
    <form className={style.form}>
    <div className={ style.boxLine}>
      <div className={style.boxInput}>
        <label htmlFor="clientName">Nome do cliente</label>
        <input
          type="text"
          name="clientName"
          id="clientName"
          value={ selectedSchedule.clientName }
          onChange={handleChangeInput}
        />
      </div>
      <div className={style.boxInput}>
        <label htmlFor="petName">Nome do Pet</label>
        <input type="text" value={selectedSchedule.pet} name='pet' id='pet' onChange={handleChangeInput}/>
      </div>
     </div>
     <div className={ style.boxLine}>
     <div className={style.boxInput}>
        <label htmlFor="date">Data</label>
        <input type="date" value={selectedSchedule.date} name='date' id='date'onChange={handleChangeInput}/>
      </div>
      <div className={style.boxInput}>
        <label htmlFor="time">Horário</label>
        <input type="time" value={selectedSchedule.time} name='time' id='time'onChange={handleChangeInput}/>
      </div>
     </div>
     <div className={ style.boxLine}>
      <div className={style.boxInput}>
        <label htmlFor="speciality">Especialidade</label>
        <input type="text" value={selectedSchedule.speciality} name='speciality' id='speciality'onChange={handleChangeInput}/>
      </div>
      <div className={style.boxInput}>
        <label htmlFor="status">Resumo</label>
        <textarea name="notes" id="notes" cols="30" rows="5" value={selectedSchedule.notes} onChange={handleChangeInput}></textarea>
      </div>
     </div>
     <p
      className={style.close}
      onClick={() => {
       setShowScheduleDetails(false);
       setSelectedSchedule({});
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

export default ScheduleDetails;