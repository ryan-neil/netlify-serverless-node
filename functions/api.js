const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// api mock data
const users = [
  {
    id: 1,
    name: 'Katie',
    email: 'katie@gmail.com',
  },
  {
    id: 2,
    name: 'Ryan',
    email: 'ryan@gmail.com',
  },
  {
    id: 3,
    name: 'John',
    email: 'john@gmail.com',
  },
];

// serve routes
router.get('/', (req, res) => {
  return res.json({
    path: 'Home',
    message: 'Serverless backend Home route',
  });
});

router.get('/users', (req, res) => {
  return res.json(users);
});

// utilize netlify serverless functions
app.use('/.netlify/functions/api', router);
// utilize netlify redirects
app.use('/api', router);

module.exports.handler = serverless(app);
