import logo from './logo.svg';
import './App.css';
import Select from './component';

function App() {
  let option = [{
    displayName:"ins",
    value : "ins",
  }]
  return (
    <div className="App">
      <Select label="DropDown" options={option} />
    </div>
  );
}

export default App;
