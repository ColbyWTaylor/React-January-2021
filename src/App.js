import logo from './logo.svg';
import './App.css';

let example = "React January 2021 Examples"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{"this renders as a string inside of curly brackets"}</p>
        <p>this is text in jsx.. so much easeier!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {example}
        </a>
      </header>
    </div>
  );
}

export default App;
