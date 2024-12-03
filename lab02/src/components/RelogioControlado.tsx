import React from 'react';

function RelogioControlado() {
  const [hora, setHora] = React.useState(new Date().toLocaleTimeString());
  const [ligado, setLigado] = React.useState(false);

  React.useEffect(() => {
    let timerID: ReturnType<typeof setInterval> | undefined;

    if (ligado) {
      timerID = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(timerID);
    }

    return () => clearInterval(timerID);
  }, [ligado]);

  const alternarRelogio = () => setLigado(!ligado);

  return (
    <div>
      <p>Hora: {hora}</p>
      <button onClick={alternarRelogio}>{ligado ? 'Desligar' : 'Ligar'}</button>
    </div>
  );
}

export default RelogioControlado;