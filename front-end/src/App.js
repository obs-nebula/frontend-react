/*
 * Copyright Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
      <button id='btn' onClick={MyExpressFunction}>Click here please</button>
      <p className='result'>{useValue}</p>
    </div>
  );
}

export default App;
