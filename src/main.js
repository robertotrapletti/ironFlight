// import { myModule } from './mymodule';
// import { HelloButton } from './button';
// console.log('main file ok');
// console.log('module loaded:', myModule);

var express = require('express');
var app = express();
let http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/');
});

http.listen(3001, function () {
  console.log('Listening on port 3001!');
});

io.on('connection', (socket) => {
  console.log('connected');
  
  socket.on('disconnect', function(){
    console.log('disconnected') 
  });
 
  socket.on('batteryStatus', (batteryStatus) => {
    console.log(batteryStatus);
  });
  
  socket.on('gyroscope', (gyroscope) => {
    console.log(gyroscope);
  });
  socket.on('db', (db) => {
    console.log(db);
  });
});