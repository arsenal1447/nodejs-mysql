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

var userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)';
var userAddSql_Params = ['Wilson','123456'];

//query a sql
connection.query(userAddSql, userAddSql_Params, function(err, result){
    if(err){
        console.log('[INSERT ERROR]- ', err.message);
        return;
    }

    console.log('-----------------Insert--------------------------');
    console.log('INSERT ID:',result);
    console.log('------------------------------------------------\n\n');
});

//close the connection
connection.end();