const express = require('express');
const router = express.Router();
const axios = require('axios');
const getData = require('./getData');
const renderData = require('./renderData');

// Home page route.
router.get('/', async (req, res) => {
  const apiUrl = "https://api.covid19api.com/summary";
  try {
    const data = await getData(apiUrl);
    renderData(res, data, null, 'home', 'TQS Log Cases');
  } catch (err) {
    console.error(err);    
    renderData(res, null, err, 'home', 'TQS Log Cases');
  }
});

// About page route.
router.get('/about', function (req, res) {
  renderData(res, null, null, 'about', 'About');
});

module.exports = router;