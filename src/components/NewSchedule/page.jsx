import React, { useCallback, useContext, useEffect, useState } from 'react';
import style from './NewSchedule.module.scss';
import userAndPetRegisterMock from '../../utils/userAndPetRegisterMock.jsx';
import ScheduleContext from '@/app/contexts/schedule_context/Schedule_context';

const NewSchedule = () => {
  const [userNamesArray, setUserNamesArray] = useState([]);
  const [showUserNames, setShowUserNames] = useState(false);
  const [userName, setUserName] = useState('');
  const [ isBtnDisabled, setIsBtnDisabled ] = useState(true);

  const { selectedUserName, setSelectedUserName, petNamesArray, setPetNamesArray, selectedSpecialty, setSelectedSpecialty, setSelectedDate, selectedDate, selectedTime, setSelectedTime, selectedPetName, setSelectedPetName,setSchedule} = useContext(ScheduleContext);

  const getRegisteredUsers = (event) => {
    const userData = event.target.value;
    setUserName(userData);
    setShowUserNames(true);
    const foundUserNames = userAndPetRegisterMock.filter((user) =>
      user.clientName.toLowerCase().includes(userData.toLowerCase())
    );
    setUserNamesArray(foundUserNames.map((user) => user.clientName));
    if (userData === '') {
      setShowUserNames(false);
    }
  };

  const getRegisteredPets = useCallback(() => { // o useCallback aqui é para evitar que a função seja recriada a cada renderização
    const foundUser = userAndPetRegisterMock.find(
      (user) => user.clientName === selectedUserName
    );
    if (foundUser) {
      const foundPetNames = foundUser.pets.map((pet) => pet.name);
      setPetNamesArray(foundPetNames);
    }
}, [selectedUserName, setPetNamesArray]);

const handleConfirmSchedule = () => {
  const newSchedule = {
    clientName: selectedUserName,
    pet: selectedPetName,
    specialty: selectedSpecialty,
    date: selectedDate,
    time: selectedTime,
  };
  setSchedule((prevSchedule) => [...prevSchedule, newSchedule]);
  setSelectedUserName('');
  setSelectedPetName('');
  setSelectedSpecialty('');
  setSelectedDate('');
  setSelectedTime('');

  alert('Agendamento confirmado!');
};

  const handleDisableButton = useCallback(() => {
    if (selectedUserName === '' || selectedPetName === '' || selectedSpecialty === '' || selectedDate === '' || selectedTime === '') {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [selectedUserName, selectedPetName, selectedSpecialty, selectedDate, selectedTime]);

  useEffect(() => {
    getRegisteredPets();
  }, [getRegisteredPets]);

  useEffect(() => {
    handleDisableButton();
  }, [selectedUserName, selectedPetName, selectedSpecialty, selectedDate, selectedTime, handleDisableButton]);

  return (
    <section className={style.fullComponent}>
      <div className={ style.containerTitle}>
        <h1>Novo agendamento</h1>
      </div>
      <div className={style.topDiv}>
        <label htmlFor="userName">Tutor:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          onChange={getRegisteredUsers}
          value={userName}
        />
        {showUserNames && (
          <ul className={style.userNames}>
            {userNamesArray.map((userName) => (
              <li
                key={userName}
                className={style.userName}
                onClick={() => {
                  setSelectedUserName(userName);
                  setUserName(userName);
                  setShowUserNames(false);
                  getRegisteredPets();
                }}
              >
                {userName}
              </li>
            ))}
          </ul>
        )}

        <label htmlFor="petName">Pet:</label>
        <select
          id="petName"
          type="text"
          name="petName"
          onChange={(e) => setSelectedPetName(e.target.value)}
          value={selectedPetName}
        >
          <option id="" value="">
            Selecionar
          </option>
          {petNamesArray.map((petName) => (
            <option
              key={petName}
              id={petName} 
              onClick={() => setSelectedPetName(petName)}
            >
              {petName}
            </option>
          ))}
        </select>
      </div>
      <div className={style.topDiv}>
        <label htmlFor="GET-especialidade">Especialidade:</label>
        {/* Depois pegar da api de especialidades */}
        <select
          id="especialidade"
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          value={selectedSpecialty}
        >
              <option id="" value="">Selecionar</option>
              <option id="Clínica Médica Geral" value="Clínica Médica Geral">Clínica Médica Geral</option>
              <option id="Dermatologia" value="Dermatologia">Dermatologia</option>
              <option id="Endocrinologia" value="Endocrinologia">Endocrinologia</option>
              <option id="Cirurgia Geral" value="Cirurgia Geral">Cirurgia Geral</option>
              <option id="Cirurgia Ortopédica" value="Cirurgia Ortopédica">Cirurgia Ortopédica</option>
        </select>
      </div>
      <div className={style.topDiv}>
        <label htmlFor="dateTime">Quando:</label>
        <input
          id="date" 
          type="date"
          name="date"
          onChange={(e) => setSelectedDate((e.target.value).split('-').reverse().join('/'))}
        />
        <input
          id="time"
          type="time"
          name="time"
          onChange={(e) => setSelectedTime(e.target.value)}
        />
      </div>
      <div>
        <button
          type='button'
          className={
            isBtnDisabled ? style.disabledButton : style.enabledButton
          }
          onClick={handleConfirmSchedule}
          disabled={isBtnDisabled}
        >
          Confirmar agendamento
        </button>
      </div>
    </section>
  );
}

export default NewSchedule;