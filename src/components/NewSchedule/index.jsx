'use client'

import { getCookie } from '@/app/actions';
import { useSchedule } from '@/hooks/useSchedule';
import { useUser } from '@/hooks/useUser';
import axios from 'axios';
import { isSameDay } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import Loading from '../Loading';
import { SearchListInput } from '../SearchListInput';
import style from './NewSchedule.module.scss';

const NewSchedule = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState('');
  const [selectedUserPets, setSelectedUserPets] = useState([]);
  const [selectedDatetime, setSelectedDatetime] = useState(new Date());

  const [refetchPets, setRefetchPets] = useState(false);

  const [watchedSelectPetNameInputData, setWatchedSelectPetNameInputData] = useState('')

  const newPetInputRef = useRef(null);

  const { scheduledDates } = useSchedule();

  const selectedDateScheduledTimes = useMemo(() => {
    return scheduledDates.filter(scheduledDate => isSameDay(selectedDatetime, zonedTimeToUtc(scheduledDate))).map(scheduledDate => {
      const newDate = new Date(scheduledDate)

      const minutes = newDate.getMinutes()

      minutes < 30 ? newDate.setMinutes(0) : newDate.setMinutes(30)

      return newDate;
    })
  }, [scheduledDates, selectedDatetime])

  const { refetchSchedules } = useSchedule();

  const { selectedUser, selectUserByName, users } = useUser();
  
  const usersName = useMemo(() => users.map(user => user.name), [users])

  const isCreatingPet = useMemo(() => watchedSelectPetNameInputData === "addNewPet", [watchedSelectPetNameInputData])

  const getRegisteredUsers = (event) => {
  };

  const getRegisteredPets = useCallback(() => {}, []);

  async function handleCreateNewPet() {
    setIsSubmitting(true);
    
    try {
      if(!newPetInputRef.current?.value || newPetInputRef.current.value === "") {
        window.alert('Pet não pode estar vazio!!');
        
        return;
      }
      const body = {
        name: newPetInputRef.current.value,
        age: 0,
        weight: 0,
        owner: selectedUser.name,
      };

      await axios.post('https://jdg-site-vet.onrender.com/pets', body);
      
      setRefetchPets(true);
    } catch(err) {
      console.error({err});
    }

    setIsSubmitting(false)
  }

  async function handleCancelCreateNewPet() {
    setWatchedSelectPetNameInputData("")
  }


  const handleConfirmSchedule = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const scheduleDate = zonedTimeToUtc(selectedDatetime).toISOString();
  
      const formData = new FormData(event.target)
  
      let formDataObject = { startTime: scheduleDate, scheduleDate }
  
      formData.forEach((value, key) => (formDataObject[key] = value));

      await axios.post('https://jdg-site-vet.onrender.com/schedules/create', formDataObject, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setWatchedSelectPetNameInputData('');
      
      refetchSchedules();
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

        if(refetchPets) {
          setWatchedSelectPetNameInputData("")

          setRefetchPets(false)
        }
      })
      .catch(err => {
        console.error({err});

        if(refetchPets) {
          setWatchedSelectPetNameInputData("")

          setRefetchPets(false)
        }
      })
    }
  }, [selectedUser, token, refetchPets, setRefetchPets, setWatchedSelectPetNameInputData])

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
          name="name"
          required
          list={usersName} 
          onSelect={selectUserByName}
        />

        <label htmlFor="petName">Pet:</label>
        {
          isCreatingPet && selectedUser ? (
            <div className={style.newPetInputContainer}>
              <input id='petName' name='petName' required ref={newPetInputRef} placeholder='Nome do novo pet' disabled={isSubmitting} />

              <button type='button' onClick={handleCreateNewPet} >
                +
              </button>

              <button type='button' onClick={handleCancelCreateNewPet} >
                x
              </button>
            </div>
          ) :(
          <select id='petName' name='petName' required value={watchedSelectPetNameInputData} onChange={e => setWatchedSelectPetNameInputData(e.target.value)}>
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
            {
              selectedUser &&
                <option value="addNewPet">
                  Adicionar +
                </option>
            }
          </select>)
        }
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
          excludeTimes={selectedDateScheduledTimes}
          showIcon 
          showTimeSelect 
          required
        />
      </div>
      <div>
        <button
          type='submit'
          className={style.ConfirmButton}
          disabled={isSubmitting || isCreatingPet}
        >
          {isSubmitting ? <Loading /> : 'Confirmar agendamento'}
        </button>
      </div>
    </form>
  );
}

export default NewSchedule;