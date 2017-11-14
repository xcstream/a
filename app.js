var express = require('express')
var app = express()
app.use(express.static('public'));
app.use('/api',function (req,res) {


})


app.listen(3001)

console.log('http://localhost:3001')