var express = require('express');
var app = express();

app.set('port', 3000);

app.use('/static', express.static(__dirname + '/src'));

app.get("*", (req, res) => res.sendFile(__dirname + "/src/index.html"));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Server runs on ' + port);
});

