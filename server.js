var app = require('./app');
var server = require('http').Server(app);

// Listen on port 3000
var port = process.env.PORT || 3000;

if(require.main === module) {
  server.listen(3000, function(){
    console.log('listening on *:3000');
  });
}
   




module.exports = server;