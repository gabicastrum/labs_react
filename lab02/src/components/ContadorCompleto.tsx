import React from 'react';

function ContadorCompleto(props: { valorInicial: number }) {
  const [contador, setContador] = React.useState(props.valorInicial || 0);

  const adicionar = () => setContador(contador + 1);
  const retirar = () => setContador(contador - 1);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={adicionar}>Adicionar</button>
      <button onClick={retirar}>Retirar</button>
    </div>
  );
}

export default ContadorCompleto;