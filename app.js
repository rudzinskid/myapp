const express = require('express')
const app = express()
const port = 3000
var square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
//console.log('The area of a square with a width of 4 is ' + square.area(4));
//var bok
app.get('/:a&:b&:c', (req, res) => {
  //const bok = req.params.bok
 aa=req.params.a,
   bb=req.params.b,
  cc=req.params.c
  //res.send('The area of a square with a width of 4 is ' + square.area(bok))
 // res.send('The area of a square with a width of 4 is ' + square.dwumian(aa,bb,cc))
  res.json({"x1":square.dwumian(aa,bb,cc)[0],"x2":square.dwumian(aa,bb,cc)[1]})
  console.log('The area of a square with a width of 4 is ' + square.dwumian(aa,bb,cc))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

