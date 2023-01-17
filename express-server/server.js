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

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());

app.get('/express_backend', (_, res) => {
  console.log('button clicked');
  res.send({
    express: 'An employee information form contains important details about your employees. Use it to keep track of personal information, duration of employment and other essentials, such as emergency contact information. An employee’s form is also useful if you receive a reference request, need to mail documents to an employee or want to know how long someone has been with your companyEmployee information forms are important in many events. If there’s an urgent need to reach out to them, an employee’s information form will give you more ways to reach them. Furthermore, you can use these forms for emergency contact information if the worker is seriously injured.'
  });
});

