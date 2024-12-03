import './App.css';
import ContadorCompleto from './components/ContadorCompleto';
import RelogioControlado from './components/RelogioControlado';
import ContadorSimples from './components/ContadorSimples';

function App() {
  return ( //Retorna o que será renderizado pelo componente
    <div className="App">
      <h1>Exercício 1</h1>
      <ContadorSimples valorInicial={0} /> 

      <h1>Exercício 2</h1>
      <ContadorCompleto valorInicial={0} />

      <h1>Exercício 3</h1>
      <RelogioControlado />
    </div>
  );
}

export default App;