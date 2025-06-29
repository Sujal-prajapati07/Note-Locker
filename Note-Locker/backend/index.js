const connectToMongo=require('./db');
const express = require('express');
var cors = require('cors');
connectToMongo();

const app = express();
const port = 5000;
app.use(cors()); // Enable CORS for all routes

app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
  console.log(`NoteLocker backend listening at http://localhost:${port}`);
});

