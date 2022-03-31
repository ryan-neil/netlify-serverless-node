const express = require('express');
const users = require('../mocks/data');

const router = express.Router();

// serve routes
router.get('/', (req, res) => {
  return res.send('Hello from inside the serverless backend.');
});

router.get('/users', (req, res) => {
  return res.json(users);
});

module.exports = router;
