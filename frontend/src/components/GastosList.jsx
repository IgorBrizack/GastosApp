import React, { useContext, useEffect } from 'react';
import '../index.css';
import PropTypes, { string } from 'prop-types';
import UserContext from '../contexts/UserContext';
import { getData } from '../services/request';
import TrComponent from './TrComponent';

function GastosList() {
  const {
    hasUpdated,
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
  }, [hasUpdated]);

  return (
    <div>
      <nav>
        <table>
          <thead>
            <tr>
              <th>Valor em R$</th>
              <th>Tipo</th>
              <th>Data</th>
              <th>Editar</th>
              <th>Salvar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {gastoList.length > 0 && (
              gastoList.map((el) => (
                <TrComponent element={el} key={el.id} />
              )))}
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
