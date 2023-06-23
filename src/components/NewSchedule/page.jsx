import React, { useEffect, useState } from 'react';
import style from './NewSchedule.module.scss'
import userAndPetRegisterMock from '../../utils/userAndPetRegisterMock.jsx';

const NewSchedule = () => {

  const [ userNamesArray, setUserNamesArray ] = useState([]);
  const [ showUserNames, setShowUserNames ] = useState(false);
  const [ userName, setUserName ] = useState('');
  const [ selectedUserName, setSelectedUserName ] = useState('');
  const [ petNamesArray, setPetNamesArray ] = useState([]);

  const getRegisteredUsers = (event) => {
   const userData = event.target.value;
    setUserName(userData);
    setShowUserNames(true);
    const foundUserNames = userAndPetRegisterMock.filter((user) => user.clientName.includes(userName));
    setUserNamesArray(foundUserNames.map((user) => user.clientName));
    userData === '' && setShowUserNames(false);
   };

   const getRegisteredPets = () => {
    const foundUser = userAndPetRegisterMock.find((user) => user.clientName === selectedUserName);
    console.log('foundUser', foundUser)
    // const foundPetNames = foundUser[0].pets.map((pet) => pet.name);
    // setPetNamesArray(foundPetNames);
    };

    const getSelectedUserName = (userName) => {
      setSelectedUserName(userName);
      setShowUserNames(false);
      getRegisteredPets();
    };

    useEffect(() => {
      getRegisteredPets();
    }, [selectedUserName]);
  
  return (
   <section className={style.fullComponent}>
      <div className={style.topDiv}>
        <label htmlFor="userName">Tutor:</label>
        <input
          type="text"
          id="userName" 
          name="userName"
          onChange={(e) => getRegisteredUsers(e)}
          value= { document.getElementById('userName') && document.getElementById('userName').value}
        />
        {
          showUserNames &&
          <ul className={style.userNames} >
            {
              userNamesArray.map((userName) => (
                <li
                  key={userName}
                  className={style.userName}
                  onClick={() => getSelectedUserName(userName)}
                >
                  {userName}
                </li>
              ))
            }
          </ul> 
        }

        <label htmlFor="GET-petName">Pet:</label>
        <select
          id="GET-petName"
          type="text"
          name="petName"
        >
          <option id="" value="">Selecionar</option>
          {
            petNamesArray.map((petName) => (
              <option
                key={petName}
                id={petName}
                value={petName}
              >
                {petName}
              </option>
            ))
          }
       </select>
      </div>
      <div className={style.topDiv}>
        <label htmlFor="GET-especialidade">Especialidade:</label>
        {/* Depois pegar da api de especialidades */}
        <select id="especialidade">
              <option id="" value="">Selecionar</option>
              <option id="Clínica Médica Geral" value="Clínica Médica Geral">Clínica Médica Geral</option>
              <option id="Dermatologia" value="Dermatologia">Dermatologia</option>
              <option id="Endocrinologia" value="Endocrinologia">Endocrinologia</option>
              <option id="Cirurgia Geral" value="Cirurgia Geral">Cirurgia Geral</option>
              <option id="Cirurgia Ortopédica" value="Cirurgia Ortopédica">Cirurgia Ortopédica</option>
            </select>
      </div>
      <div className={style.topDiv}>
        <label htmlFor="GET-date">Data:</label>
        <input id="GET-name" type="date" name="name"/>
        <label htmlFor="GET-peso">Hora:</label>
        <input id="GET-peso" type="time" name="peso"/>
      </div>
      <div>
        <button
          type='button'
          className={style.button}
        >
          Confirmar agendamento
        </button>
      </div>
    </section>
  );
}

export default NewSchedule;