const app = require('express')();
const cors = require('cors');
const wal = require('./wal.json')

const PORT = process.env.PORT || 8000;

app.use(cors());

app.listen(
  PORT,
  () => console.log(`Server running on ${PORT}`)
);

app.get('/', (req, res) => {
  res.send(wal)
})