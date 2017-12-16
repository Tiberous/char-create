const express = require('express')

const app = express()

app.get('/', function (req, res) {
  // NEW CODE
  res.render('index');
})
app.set('view engine', 'ejs')
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})