import logo from './logo.svg';
import './App.css';
import ProvideTotalOdds from "./components/right/betslip"
import Right from "./components/right/betslip"
import Betslip from "./components/right"

function App() {
  return (
    <div className="App p-2 px-4">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ProvideTotalOdds>
        <Right/>
        <Betslip />

      </ProvideTotalOdds>
    </div>
  );
}

export default App;
