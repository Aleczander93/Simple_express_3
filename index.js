var express = require('express');
var server = express();


server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root:__dirname});
});

server.listen(5555,function(){
console.log('now listening on port...', 5555);
});
