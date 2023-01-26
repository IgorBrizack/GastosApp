import React, { useContext, useEffect } from 'react';
import '../style.css';
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
    const filteredResultsWithValues = result.filter((e) => e.value > 0);
    setGastoList(filteredResultsWithValues);
  };

  useEffect(() => {
    loadGastos();
  }, [hasUpdated]);

  return (
    <div className="table-main-container">
      <table className="table">
        <tbody>
          {gastoList.length > 0 && (
            gastoList.map((el) => (
              <TrComponent element={el} key={el.id} />
            )))}
        </tbody>
      </table>
    </div>
  );
}

GastosList.propTypes = {
  data: PropTypes.arrayOf(string),
}.isRequired;

export default GastosList;
