var mysql = require('mysql');

module.exports.usersList = function(req, res){
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

	var qury = "SELECT * FROM authentication";
	connection.query(qury, function(err, rows){
		if(err)
			throw err
		else{
			var result = JSON.stringify(rows);
			res.send(result);
		}
	});
};

module.exports.fileTable = function(req, res){
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
			console.log('Connected to Database: File table');
	});

	var qury = "SELECT * FROM file";
	connection.query(qury, function(err, rows){
		if(err)
			throw err
		else{
			var result = JSON.stringify(rows);
			res.send(result);
		}
	});
};

module.exports.zipTable = function(req, res){
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
			console.log('Connected to Database: zip table');
	});

	var qury = "SELECT * FROM zip";
	connection.query(qury, function(err, rows){
		if(err)
			throw err
		else{
			var result = JSON.stringify(rows);
			res.send(result);
		}
	});
};

module.exports.partTable = function(req, res){
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
			console.log('Connected to Database: participants table');
	});

	var qury = "SELECT * FROM participants";
	connection.query(qury, function(err, rows){
		if(err)
			throw err
		else{
			var result = JSON.stringify(rows);
			res.send(result);
		}
	});
};