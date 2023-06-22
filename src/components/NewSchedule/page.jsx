import React from 'react';
import style from './NewSchedule.module.scss'

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
      <div className={style.topDiv}>
        <label for="GET-name">Tutor:</label>
        <input id="GET-name" type="text" name="name"/>

        <label for="GET-petName">Pet:</label>
        <input id="GET-petName" type="text" name="petName"/>
      </div>
      <div className={style.topDiv}>
        <label for="GET-especialidade">Especialidade:</label>
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