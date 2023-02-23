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
import InfiniteScroll from './InfiniteScroll';
function App () {
  const [useValue, useValueFunction] = useState();
  const [toggle, setToggle] = useState(false);
  async function MyExpressFunction () {


    const response = await fetch('http://localhost:5000/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    useValueFunction(body.express);

  }
  return (
    <div className='App'>
      <div style={{ margin: '2% 30%', textAlign: 'left' }}>
        <h1 >Details of Employees </h1>
        <p>
          An employee information form ensures that you have current details on employees, including contact details and emergency contact information.
          Collecting and updating these forms periodically will allow you to keep track of your employees and reference details when you need them. Learn what to include on an employee information form and how to create one for your business.
        </p>
        <button id='btn' style={{ padding: '0.5% 3%', backgroundColor: '#E0E0E0' }} onClick={() => {
          setToggle(!toggle);
          MyExpressFunction();
        }}>Learn more </button>

        {toggle ? <p className='result'>{useValue}</p> : ''}
      </div>
      <InfiniteScroll />
    </div>
  );
}

export default App;
