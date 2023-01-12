import React from 'react';
import PropTypes from 'prop-types';

function PorcentagensComponent({
  lazer, investimento, educacao, servico, alimentacao,
}) {
  return (
    <div>
      <h2>Porcentagens</h2>
      <p>
        {`Lazer ${lazer}%`}
      </p>
      <p>
        {`Educação ${educacao}%`}
      </p>
      <p>
        {`Investimento ${investimento}%`}
      </p>
      <p>
        {`Alimentação ${alimentacao}%`}
      </p>
      <p>
        {`Serviço ${servico}%`}
      </p>
    </div>
  );
}

export default PorcentagensComponent;

PorcentagensComponent.propTypes = {
  lazer: PropTypes.number,
  investimento: PropTypes.number,
  educacao: PropTypes.number,
  servico: PropTypes.number,
  alimentacao: PropTypes.number,
}.isRequired;
