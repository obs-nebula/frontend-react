const express = require('express'); //Line 1
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000; //Line 3
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors())
// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'Welcome to the project' });
});