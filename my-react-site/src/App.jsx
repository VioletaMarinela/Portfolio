import logo from './logo.webp';
import Banner from './components/banner'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save MARYYY
          to reloadBRAVOO.
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
    </div>
  );
}

export default App;
