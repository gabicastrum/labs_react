import React from 'react'; //importando biblioteca do react para usar o JSX e o Hook useState

function ContadorSimples(props: { valorInicial?: number }) {
    const [contador, setContador] = React.useState(props.valorInicial || 0); // Hook useState. Inicializa o estado contador com o valor da prop valorInicial ou 0 se a prop não for fornecida. Isso demonstra o uso de hooks para gerenciar o estado dentro de um componente funcional.

    const adicionar = () => {
        setContador(prevContador => prevContador + 1);
    }; // Função que incrementa o contador em 1. Usa a função setContador para atualizar o estado do contador. A função setContador recebe uma função que retorna o novo valor do contador com base no valor anterior. Isso garante que o valor do contador seja atualizado de forma segura, mesmo quando o estado é atualizado de forma assíncrona.

    return (
        <div>
            <p>Contagem: {contador}</p>
            <button onClick={adicionar}>Adicionar</button>
        </div> 
    ); // Retorna o JSX que será renderizado pelo componente. O JSX exibe o valor do contador e um botão que, quando clicado, chama a função adicionar para incrementar o contador. 
}

export default ContadorSimples;