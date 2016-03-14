var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 3000,
    apiGet = require('./server/apiGet.js')
    apiPost = require('./server/apiPost.js'),
    apiDelete = require('./server/apiDel.js');

var result_auth = [];   

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/app', express.static(path.join(__dirname + '/app' )));

//routes
app.get('/', function(req,res){
	res.send('index.html');
});

app.get('/zip', function(req,res){
	res.sendFile(path.join(__dirname + '/public/zip.html'));
});

app.get('/participants', function(req,res){
	res.sendFile(path.join(__dirname + '/public/participants.html'));
});

app.get('/file', function(req,res){
	res.sendFile(path.join(__dirname + '/public/file.html'));
});

//api GET
app.get('/api/auth', apiGet.usersList);
app.get('/api/participants',apiGet.partTable);
app.get('/api/file',apiGet.fileTable);
app.get('/api/zip',apiGet.zipTable);

//api POST
app.post('/api/post/auth', apiPost.addAuth);
app.post('/api/post/participants', apiPost.addPart);
app.post('/api/post/file', apiPost.addFile);
app.post('/api/post/zip', apiPost.addZip);

//api UPDATE

//api DELETE
app.delete('/api/del/zip', apiDelete.delZip);

app.listen(port, function(){
	console.log('Servering listening at port: '+port);
});