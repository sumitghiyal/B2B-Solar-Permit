const express = require('express');
const router = express.Router();

// Sample route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route working!' });
});

module.exports = router; 

