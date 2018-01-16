const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//user Login Route
router.get('/login', (req,res) => {
    ser.send('login');
  });
  
  //user Registrer Route
  router.get('/registrer', (req,res) => {
    ser.send('registrer');
  });

module.exports = router;