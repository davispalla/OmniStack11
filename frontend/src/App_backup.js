import React, {useState} from 'react';

import Logon from './pages/Logon';

function App() {
  const [counter, setCounter] = useState(0);
  function increment(){
    setCounter(counter+1);
  }
  
  return (
    <div>
    <Header>Contador: {counter}</Header>
    <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
