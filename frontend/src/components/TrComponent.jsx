import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';
import '../index.css';

function TrComponent({ element }) {
  const [editar, setEditar] = useState(false);
  const [value, setValue] = useState();

  useState(() => {
    setValue(element.value);
  }, [editar]);

  return (
    <tr key={element.id}>
      <th>
        <label htmlFor={element.id}>
          {editar
            ? (
              <input
                className="TrInput"
                id={element.id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            )
            : <p>{element.value}</p>}
        </label>
      </th>
      <th>{element.type}</th>
      <th>{element.gastoDate}</th>
      <th><button type="button" onClick={() => setEditar(!editar)}>Editar</button></th>
    </tr>
  );
}

TrComponent.propTypes = {
  element: PropTypes.arrayOf(string),
}.isRequired;

export default TrComponent;
