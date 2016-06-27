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

//存储过程
var userProc = 'call P_UserInfo(?,?,?,@ExtReturnVal);';
var userProc_Params = [0,'zxx','123456'];

//调用存储过程
connection.query(userProc,userProc_Params, function(err, result){
    if(err){
        console.log('[EXEC PROC ERROR]- ', err.message);
        return;
    }

    console.log('-----------------Insert--------------------------');
    console.log(result);
    console.log(result[0][0].ExtReturnVal);
    console.log('------------------------------------------------\n\n');
});

//close the connection
connection.end();