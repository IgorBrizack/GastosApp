import React, { useContext, useEffect } from 'react';
import '../index.css';
import PropTypes, { string } from 'prop-types';
import UserContext from '../contexts/UserContext';
import { getData } from '../services/request';

function GastosList() {
  const {
    gastoList,
    setGastoList,
  } = useContext(UserContext);

  const loadGastos = async () => {
    const { email } = JSON.parse(localStorage.getItem('user'));

    const result = await getData(`/gasto/${email}/list`);
    setGastoList(result);
  };

  useEffect(() => {
    loadGastos();
  }, []);

  return (
    <div>
      <nav>
        {/* <ul>
          {gastoList.length > 0 && (
            gastoList.map((el) => (
              <li key={el.id}>
                <div style={{
                  display: 'flex',
                }}
                >
                  <p>{el.value}</p>
                  <p>{el.type}</p>
                  <p>{el.gastoDate}</p>
                  <button type="button">Editar</button>
                </div>
              </li>
            ))
          )}
        </ul> */}
        <table>
          <thead>
            <tr>
              <th>Valor em R$</th>
              <th>Tipo</th>
              <th>Data</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {gastoList.length > 0 && (
              gastoList.map((el) => (
                <tr key={el.id}>
                  <th>{el.value}</th>
                  <th>{el.type}</th>
                  <th>{el.gastoDate}</th>
                  <th><button type="button">Editar</button></th>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </nav>
    </div>
  );
}

GastosList.propTypes = {
  data: PropTypes.arrayOf(string),
}.isRequired;

export default GastosList;
