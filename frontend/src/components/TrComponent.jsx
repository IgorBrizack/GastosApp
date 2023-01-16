import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import '../index.css';

function TrComponent({ element }) {
  const [editar, setEditar] = useState(false);
  const [value, setValue] = useState();
  const [type, setType] = useState();
  const [date, setDate] = useState();

  const labels = {
    alimentacao: 'Alimentação',
    servico: 'Serviço',
    investimento: 'Investimento',
    lazer: 'Lazer',
    educacao: 'Educação',
  };

  useState(() => {
    setValue(element.value);
    setType(element.type);
    setDate(element.gastoDate);
  }, [editar, type, value, date]);

  return (
    <tr>
      <th>
        <label htmlFor={element.id}>
          {editar
            ? (
              <input
                id={element.id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            )
            : <p>{element.value}</p>}
        </label>
      </th>
      <th>
        <label htmlFor={element.type}>
          {editar
            ? (
              <select onChange={(e) => setType(e.target.value)} name="select">
                <option value="alimentacao">Alimentação</option>
                <option value="servico">Serviços</option>
                <option value="investimento">Investimentos</option>
                <option value="lazer">Lazer</option>
                <option value="educacao">Educação</option>
              </select>
            )
            : <p>{labels[element.type]}</p>}
        </label>
      </th>
      <th>
        {editar
          ? (
            <input
              onChange={(e) => setDate(e.target.value.split('-').reverse().join('/'))}
              value={date}
              type="date"
              id="insert-date-input"
              name="gasto-date"
              min="2000-01-01"
              max="2030-01-01"
            />
          )
          : <p>{element.gastoDate}</p>}
      </th>
      <th><button type="button" onClick={() => setEditar(!editar)}>Editar</button></th>
      <th><button type="button" disabled={!editar}>Salvar</button></th>
      <th><button type="button">Deletar</button></th>
    </tr>
  );
}

TrComponent.propTypes = {
  element: PropTypes.arrayOf(string),
}.isRequired;

export default TrComponent;
