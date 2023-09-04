'use client'

import { getCookie } from '@/app/actions';
import { useSchedule } from '@/hooks/useSchedule';
import { useUser } from '@/hooks/useUser';
import { zonedTimeToUtc } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR';
import { useCallback, useEffect, useMemo, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from '../Loading';
import { SearchListInput } from '../SearchListInput';
import style from './NewSchedule.module.scss';

const NewSchedule = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState('');
  const [selectedUserPets, setSelectedUserPets] = useState([]);
  const [selectedDatetime, setSelectedDatetime] = useState(new Date())

  const { scheduledDates } = useSchedule();

  const { selectedUser, selectUserByName, users } = useUser();
  
  const usersName = useMemo(() => users.map(user => user.name), [users])

  const getRegisteredUsers = (event) => {
  };

  const getRegisteredPets = useCallback(() => {}, []);

  const handleConfirmSchedule = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const scheduleDate = zonedTimeToUtc(selectedDatetime).toISOString();
  
      const formData = new FormData(event.target)
  
      let formDataObject = { startTime: scheduleDate, scheduleDate }
  
      formData.forEach((value, key) => (formDataObject[key] = value));

      const formDataJSON = JSON.stringify(formDataObject);

      await fetch('https://jdg-site-vet.onrender.com/schedules/create', {
        method: 'POST', 
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formDataJSON
      })
    } catch(err) {
      console.error({err})
    }
    setIsSubmitting(false)
  };

  useEffect(() => {
    if(selectedUser && token) {
      fetch('https://jdg-site-vet.onrender.com/pets', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        } 
      })
      .then(res => res.json())
      .then(data => {
        const userPets = data.filter(pet => pet.owner.id === selectedUser.id);

        setSelectedUserPets(userPets);
      })
      .catch(err => console.error({err}))
    }
  }, [selectedUser, token])

  useEffect(() => {
    getCookie('token')
    .then(cookie => setToken(cookie));
  }, [])

  return (
    <form onSubmit={handleConfirmSchedule} className={style.fullComponent}>
      <div className={ style.containerTitle}>
        <h1>Novo agendamento</h1>
      </div>
      <div className={style.topDiv}>
        <label htmlFor="userName">Tutor:</label>
        <SearchListInput 
          placeholder='Selecione um Usuário' 
          id="userName" 
          required 
          name="name"
          list={usersName} 
          onSelect={selectUserByName}
        />

        <label htmlFor="petName">Pet:</label>
        <select id='petName' name='petName' required>
          <option id="" value="">
            Selecionar
          </option>
          {selectedUserPets.map(({ name, id }) => (
            <option
              key={id}
              value={name} 
            >
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className={style.topDiv}>
        <label htmlFor="specialty">Especialidade:</label>
        <select id='specialty' name='specialty' required>
          <option id="" value="">Selecionar</option>
          <option id="Clínica Médica Geral" value="Clínica Médica Geral">Clínica Médica Geral</option>
          <option id="Dermatologia" value="Dermatologia">Dermatologia</option>
          <option id="Endocrinologia" value="Endocrinologia">Endocrinologia</option>
          <option id="Cirurgia Geral" value="Cirurgia Geral">Cirurgia Geral</option>
          <option id="Cirurgia Ortopédica" value="Cirurgia Ortopédica">Cirurgia Ortopédica</option>
        </select>
      </div>
      <div className={style.topDiv}>
        <label htmlFor="datetime">Quando:</label>
        <DatePicker 
          id="datetime"
          locale={pt} 
          timeCaption='Horário' 
          selected={selectedDatetime}
          onChange={(date) => setSelectedDatetime(date)}
          dateFormat="Pp"
          timeFormat="p"
          excludeDates={scheduledDates}
          showIcon 
          showTimeSelect 
          required
        />
      </div>
      <div>
        <button
          type='submit'
          className={style.ConfirmButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loading /> : 'Confirmar agendamento'}
        </button>
      </div>
    </form>
  );
}

export default NewSchedule;