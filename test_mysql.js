var mysql = require('mysql');

//create a connection
var connection = mysql.createConnection({
    host      :'127.0.0.1',
    user      :'root',
    password  :'123456',
    port      :'3306',
});

connection.connect(function(err){
    if(err){
        console.log('[query]- :' + err);
        return;
    }
    console.log('[connection connect] succeed!');
});

//query a sql
connection.query('select 1+1 as so' ,function(err, rows, fields){
    if(err){
        console.log('[query]- :' + err);
        return;
    }
    console.log('the so is :',rows[0].so);
});

//close the connection
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});