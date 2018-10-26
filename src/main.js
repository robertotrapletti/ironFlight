// import { myModule } from './mymodule';
// import { HelloButton } from './button';
// console.log('main file ok');
// console.log('module loaded:', myModule);

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});