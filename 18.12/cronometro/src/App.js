import './App.css';
import Cronometro from './components/cronometro/cronometro'
import Relogio from './components/relogio/relogio'
import Timer from './components/timer/timer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Relogio/>
        <Cronometro/>
        <Timer/>
      </header>
    </div>
  );
}

export default App;
