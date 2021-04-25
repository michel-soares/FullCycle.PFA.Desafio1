var mysql = require('mysql');
const configMysql  ={
    host: 'pfa1-db',
    user :'root',
    password: 'root',
    database: 'nodedb'
}
var conn = mysql.createConnection(configMysql); 

conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;