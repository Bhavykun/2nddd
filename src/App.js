import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent';
import { GlobalSpace } from './GlobalSpace';
import { useContext } from 'react';

function App() {

  let data=useContext(GlobalSpace);
  console.log(data);

  return (

    <div className="App">
      <GlobalSpace.Provider value="GRIET">
        <TestComponent></TestComponent>
      </GlobalSpace.Provider>
    </div>
  );
}

export default App;
