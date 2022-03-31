const express = require('express');
const users = require('../../mocks/data');

const router = express.Router();

// routes
// home route
router.get('/', (req, res) => {
  return res.send('Hello from inside the serverless backend.');
});

//  get all users
router.get('/users', (req, res) => {
  return res.json(users);
});

//  get single user
router.get('/users/:id', (req, res) => {
  const user = users.filter((user) => user.id === parseInt(req.params.id));

  return res.json(user);
});

module.exports = router;
