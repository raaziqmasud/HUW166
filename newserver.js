var express = require('express')
var app = express()
var cors = require('cors')
 
app.use(cors())

app.use(express.static("."));

app.listen(7000, function () {
    console.log('Example app listening on port 7000!')
  })