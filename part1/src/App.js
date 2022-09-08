import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
       <span>hello my name is {props.poop} </span>
      </header>
    </div>
  );
}

export default App;
