import React from 'react';
import PropTypes from 'prop-types';
import '../bootstrap.min.css';

function PorcentagensComponent({
  lazer, investimento, educacao, servico, alimentacao,
}) {
  return (
    <div>
      <p className="font-monospace">
        {`Lazer: ${lazer ? Number(lazer).toFixed(2) : 0}%`}
      </p>
      <p className="font-monospace">
        {`Educação: ${educacao ? Number(educacao).toFixed(2) : 0}%`}
      </p>
      <p className="font-monospace">
        {`Investimento: ${investimento ? Number(investimento).toFixed(2) : 0}%`}
      </p>
      <p className="font-monospace">
        {`Alimentação: ${alimentacao ? Number(alimentacao).toFixed(2) : 0}%`}
      </p>
      <p className="font-monospace">
        {`Serviço: ${servico ? Number(servico).toFixed(2) : 0}%`}
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
