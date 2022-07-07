import './App.css';
import { Pin } from './Components/Pin';
import { useState } from 'react';

function App() {
  const [PinInput, setPinInput] = useState([]);
  return (
    <div className="App">
      <h1>Enter Card Number</h1>
     <Pin
     length={4}
     inputBoxLength={4}
     setPinInput={setPinInput}
     />
     <h3>Card Number is: {PinInput}</h3>
    </div>
  );
}

export default App;
