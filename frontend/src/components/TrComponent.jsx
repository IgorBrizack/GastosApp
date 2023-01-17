import React, { useState, useContext } from 'react';
import PropTypes, { string } from 'prop-types';
import '../index.css';
import { deleteData, putData } from '../services/request';
import UserContext from '../contexts/UserContext';

function TrComponent({ element }) {
  const { hasUpdated, setHasUpdated } = useContext(UserContext);
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

  const upadteGasto = async () => {
    const { id } = element;
    try {
      await putData(`/gasto/${id}`, {
        value: Number(value), type, date: date.split('-').reverse().join('/'),
      });
      setEditar(false);
      return setHasUpdated(!hasUpdated);
    } catch (error) {
      return error.message;
    }
  };

  const deleteGasto = async () => {
    const { id } = element;

    try {
      await deleteData(`/gasto/${id}`);
      return setHasUpdated(!hasUpdated);
    } catch (error) {
      return error.message;
    }
  };

  useState(() => {
    setValue(element.value);
    setType(element.type);
    setDate(element.gastoDate.split('/').reverse().join('-'));
  }, [editar, type, value, date, hasUpdated]);

  return (
    <tr>
      <th>
        <label htmlFor={element.id}>
          {editar
            ? (
              <input
                type="number"
                step="0.01"
                name="quantity"
                min="0.01"
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
              <select
                onClick={(e) => setType(e.target.value)}
                name="select"
              >
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
              onChange={(e) => setDate(e.target.value)}
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
      <th><button type="button" disabled={!editar} onClick={() => upadteGasto()}>Salvar</button></th>
      <th><button type="button" onClick={() => deleteGasto()}>Deletar</button></th>
    </tr>
  );
}

TrComponent.propTypes = {
  element: PropTypes.arrayOf(string),
}.isRequired;

export default TrComponent;
