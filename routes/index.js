// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res) =>{

  res.send('<h1>hello world</h1>');


});


router.get('/task', (req,res)=>{

var name = {
  'names': [1,34,7,9,5,8,0,5,34,8,4,4,67,9,5]
}

res.send(name)
});



module.exports = router
