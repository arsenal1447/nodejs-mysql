var mysql = require('mysql');

//create a connection
var connection = mysql.createConnection({
    host      :'127.0.0.1',
    user      :'root',
    password  :'123456',
    port      :'3306',
    database  :'nodesample',
});

connection.connect();

// add new data
// var userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)';
// var userAddSql_Params = ['Wilson','123456'];

//delete the data

var userDelSql = 'DELETE FROM userinfo';

//query a sql
connection.query(userDelSql, function(err, result){
    if(err){
        console.log('[DELETE ERROR]- ', err.message);
        return;
    }

    console.log('-----------------Insert--------------------------');
    console.log('DELETE affectedRows:',result.affectedRows);
    console.log('------------------------------------------------\n\n');
});

//close the connection
connection.end();