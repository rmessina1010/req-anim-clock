import logo from './logo.svg';
import './App.css';
import { ClockUnit} from './components/clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div><ClockUnit unit={{month:'long', day:'numeric', year:'2-digit'}}/> at <ClockUnit unit={{hour:'numeric', minute:'2-digit', second:'2-digit'}}/></div>
        <div><ClockUnit unit='hour' st='numeric'/>:<ClockUnit unit='minute' pad={2}/>:<ClockUnit unit='second' st='2-digit' pad={2}/>:<ClockUnit unit='ms' tol={2}/><ClockUnit unit='period'></ClockUnit></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
