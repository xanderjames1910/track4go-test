const express = require('express');
const cors = require('cors');

const app = express();
const apiPort = 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

app.get('/', (req, res)=>{res.send('Hellor World!')});

app.listen(apiPort, () =>console.log(`Server running on port ${apiPort}`));