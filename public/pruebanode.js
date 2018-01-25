var http = require('http');
var saludo = require('saludar.js')

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(saludo('Facu'));
    //res.end('<input>Hello World!</input>');
});

server.listen(8000);

//npm install firebase-tools -g
//bajar insomia para las API