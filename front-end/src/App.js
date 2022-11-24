import { useState } from 'react';
import './App.css';

function App () {
  const [useValue, useValueFunction] = useState();
  async function MyExpressFunction () {
    const response = await fetch('http://localhost:5000/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    useValueFunction(body.express)
  }
  return (
    <div className='App'>

      <h1>This is a simple react project</h1>
      <button onClick={MyExpressFunction}>Click here please</button>

      <p>{useValue}</p>


    </div>
  );
}

export default App;
