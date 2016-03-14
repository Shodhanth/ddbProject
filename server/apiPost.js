var mysql = require('mysql')
	md5 = require('js-md5');


module.exports.addAuth = function (req,res) {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'ARIAMY'
	});
	connection.connect(function(err){
		if(err)
			console.log('Error in connecting to database');
		else
			console.log('Connected to Database: authentication table');
	});
	

	data = req.body;
	console.log(data);

	var username = data.USERNAME,
		email = data.EMAIL_ID,
		password = md5(data.PASSWORD);

	data = {
		USERNAME: username,
		EMAIL_ID: email,
		PASSWORD: password
	};

	console.log(data);
	var qury = connection.query("INSERT INTO SET ?", data, function(err, result){
		if(err) {console.log('error inserting: ' + err); res.send("Error inserting");}
		else console.log(qury.sql); 
	}); 		
};

module.exports.addPart = function (req,res) {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'ARIAMY'
	});
	connection.connect(function(err){
		if(err)
			console.log('Error in connecting to database');
		else
			console.log('Connected to Database: authentication table');
	});

	data = req.body;

	var qury = connection.query("INSERT INTO SET ?", data, function(err, result){
		if(err) {console.log('error inserting'); res.send("Error inserting");}
		else console.log(qury.sql);
	}); 		
};

module.exports.addFile = function (req,res) {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'ARIAMY'
	});
	connection.connect(function(err){
		if(err)
			console.log('Error in connecting to database');
		else
			console.log('Connected to Database: authentication table');
	});
	
	data = req.body;

	var qury = connection.query("INSERT INTO SET ?", data, function(err, result){
		if(err) {console.log('error inserting'); res.send("Error inserting");}
		else console.log(qury.sql);
	}); 		
};

module.exports.addZip = function (req,res) {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'ARIAMY'
	});
	connection.connect(function(err){
		if(err)
			console.log('Error in connecting to database');
		else
			console.log('Connected to Database: authentication table');
	});
	
	data = req.body;

	var qury = connection.query("INSERT INTO SET ?", data, function(err, result){
		if(err) {console.log('error inserting'); res.send("Error inserting");}
		else console.log(qury.sql);
	}); 		
};