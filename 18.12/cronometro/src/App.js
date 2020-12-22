import './App.css';
import Cronometro from './components/cronometro/cronometro'
import Relogio from './components/relogio/relogio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Relogio/>
        <Cronometro/>
      </header>
    </div>
  );
}

export default App;
