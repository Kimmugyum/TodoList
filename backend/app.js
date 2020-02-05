const express = require('express')
const app = express()
const port = 8000
var mysql = require('mysql');

var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '1234',
    database:'test1'
});

db.connect();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

db.end();