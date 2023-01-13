import React from 'react';
import PropTypes from 'prop-types';

function PorcentagensComponent({
  lazer, investimento, educacao, servico, alimentacao,
}) {
  return (
    <div>
      <h2>Porcentagens</h2>
      <p>
        {`Lazer ${lazer ? Number(lazer).toFixed(2) : 0}%`}
      </p>
      <p>
        {`Educação ${educacao ? Number(educacao).toFixed(2) : 0}%`}
      </p>
      <p>
        {`Investimento ${investimento ? Number(investimento).toFixed(2) : 0}%`}
      </p>
      <p>
        {`Alimentação ${alimentacao ? Number(alimentacao).toFixed(2) : 0}%`}
      </p>
      <p>
        {`Serviço ${servico ? Number(servico).toFixed(2) : 0}%`}
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
