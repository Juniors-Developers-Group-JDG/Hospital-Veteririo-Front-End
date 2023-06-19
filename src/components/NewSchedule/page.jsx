import React from 'react';
import { GiSittingDog } from 'react-icons/gi';
import { FaCat } from 'react-icons/fa';
import style from './NewSchedule.module.scss'
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const NewSchedule = () => { 

  const [ selectedSpecie, setSelectedSpecie ] = React.useState(undefined);

  const getSpecie = (event) => {
    const specie = event.target.value;
    if ( specie === undefined) {
      setSelectedSpecie(undefined);
    } else {
      setSelectedSpecie(specie);
    }
  };

  return (
   <section className={style.fullComponent}>
      <div >
        {
          selectedSpecie === undefined ? <AiOutlineQuestionCircle className={style.petIcon}/> : selectedSpecie === 'Cão' ? <GiSittingDog className={style.petIcon}/> : <FaCat className={style.petIcon}/>
        }
      </div>
      <div className={style.topDiv}>
        <label for="GET-name">Tutor:</label>
        <input id="GET-name" type="text" name="name"/>

        <label for="GET-petName">Pet:</label>
        <input id="GET-petName" type="text" name="petName"/>
      </div>
      <div className={style.topDiv}>
        <label for="GET-PetSpecie">Espécie:</label>
        <select
          id="specie"
          onChange={getSpecie}
        >
          <option id="" value="">Selecionar</option>
          <option id="Cão" value="Cão">Cão</option>
          <option id="Gato" value="Gato">Gato</option>
        </select>
        <label for="GET-breed">Sexo:</label>
            <select id="breed">
            <option id="Selecionar" value="Selecionar">Selecionar</option>
              <option id="Macho" value="Macho">Macho</option>
              <option id="Fêmea" value="Fêmea">Fêmea</option>
            </select>
      </div>
      <div className={style.topDiv}>
        <label for="GET-breed">Raça:</label>
            <select id="breed">
              <option id="" value="">Selecionar</option>
              <option id="SRD" value="SRD">SRD</option>
              <option id="Pastor Alemão" value="Pastor Alemão">Pastor Alemão</option>
              <option id="Pinscher" value="Pinscher">Pinscher</option>
              <option id="Poodle" value="Poodle">Poodle</option>
              <option id="Dalmata" value="Dalmata">Dalmata</option>
            </select>
            <label for="GET-PetAge">Idade:</label>
        <input id="GET-age" type="number" name="age"/>
      </div>
      <div className={style.topDiv}>
        <label for="GET-peso">Peso (kg):</label>
        <input id="GET-peso" type="number" name="peso"/>
      </div>
      <div className={style.topDiv}>
        <label for="GET-date">Data:</label>
        <input id="GET-name" type="date" name="name"/>
        <label for="GET-peso">Hora:</label>
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