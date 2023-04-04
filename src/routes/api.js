const express = require('express');
const router = express.Router();


// Routing end point
router.get('/hello', function (req, res) {
  res.status(200).json({data:"hello world"})  
})





module.exports = router