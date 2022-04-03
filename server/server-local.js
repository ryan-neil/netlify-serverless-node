const express = require('express');
const cors = require('cors');
// routes
const usersRoute = require('./routes/usersRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', usersRoute);

const PORT = 9001;
app.listen(PORT || 9001, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
