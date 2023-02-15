import React, { useContext, useEffect, useState } from 'react';
import '../bootstrap.min.css';
import UserContext from '../contexts/UserContext';
import loading from '../images/loading.gif';

function PorcentagensComponent() {
  const {
    userGastoData,
  } = useContext(UserContext);

  const [hasPercentages, setHasPercentages] = useState(false);
  const [eduPercentage, setEduPercentage] = useState();
  const [lazerPercentage, setLazerPercentage] = useState();
  const [investPercentage, setInvestPercentage] = useState();
  const [alimentacaoPercentage, setAlimentacaoPercentage] = useState();
  const [servicoPercentage, setServicoPercentage] = useState();

  const getPercentages = (data) => {
    const total = data.reduce((acc, el) => {
      const sum = acc + el.value;
      return sum;
    }, 0);

    const [lazerValue] = data.filter((el) => el.type === 'lazer');
    const [educacaoValue] = data.filter((el) => el.type === 'educacao');
    const [investimentoValue] = data.filter((el) => el.type === 'investimento');
    const [servicoValue] = data.filter((el) => el.type === 'servico');
    const [alimentacaoValue] = data.filter((el) => el.type === 'alimentacao');

    const lazerPercentual = ((Number(lazerValue.value) * 100) / total);
    const educacaoPercentual = ((Number(educacaoValue.value) * 100) / total);
    const investimentoPercentual = ((Number(investimentoValue.value) * 100) / total);
    const servicoPercentual = ((Number(servicoValue.value) * 100) / total);
    const alimentacaoPercentual = ((Number(alimentacaoValue.value) * 100) / total);

    setEduPercentage(educacaoPercentual);
    setLazerPercentage(lazerPercentual);
    setInvestPercentage(investimentoPercentual);
    setAlimentacaoPercentage(alimentacaoPercentual);
    setServicoPercentage(servicoPercentual);
    setHasPercentages(true);
  };

  useEffect(() => {
    if (userGastoData.length > 0) getPercentages(userGastoData);
  }, [userGastoData]);

  return (
    <div>
      { hasPercentages ? (
        <div>
          <p className="font-monospace">
            {`Lazer: ${lazerPercentage ? Number(lazerPercentage).toFixed(2) : 0}%`}
          </p>
          <p className="font-monospace">
            {`Educação: ${eduPercentage ? Number(eduPercentage).toFixed(2) : 0}%`}
          </p>
          <p className="font-monospace">
            {`Investimento: ${investPercentage ? Number(investPercentage).toFixed(2) : 0}%`}
          </p>
          <p className="font-monospace">
            {`Alimentação: ${alimentacaoPercentage ? Number(alimentacaoPercentage).toFixed(2) : 0}%`}
          </p>
          <p className="font-monospace">
            {`Serviço: ${servicoPercentage ? Number(servicoPercentage).toFixed(2) : 0}%`}
          </p>
        </div>
      ) : (<img alt="loading" src={loading} />)}
    </div>
  );
}

export default PorcentagensComponent;
