const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());

app.get('/express_backend', (req, res) => {
  console.log('button clicked');
  res.send({ express: 'Welcome to the project' });
});

