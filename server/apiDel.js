var mysql = require('mysql')
	md5 = require('js-md5');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Dw1Ut8',
	database: 'ARIAMY'
});
connection.connect(function(err){
	if(err)
		console.log('Error in connecting to database');
	else
		console.log('Connected to Database: zip table');
});

module.exports.delZip = function(req, res){

	name = req.body;

	console.log(name);
	// var qury = connection.query('DELETE FROM zip WHERE NAME = "' +name+'"', function(err, result){
	// 	if(err) {console.log('error inserting: ' + err); res.send("Error inserting");}
	// 	else console.log('Entry deleted: '+ qury.sql); 
	// }); 
};