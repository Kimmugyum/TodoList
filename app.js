const express = require('express')
const app = express()
var mysql = require('mysql');
const port = 8000

var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '1234',
    database:'test1'
});

db.connect();
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/todos', function(req, res) {
    db.query(`SELECT * FROM nodelist`, function(error, result)
    {
        if(error)
        {
            console.log(error)
        }
        console.log(result)
        res.json(result)
    })
})
app.post('/todos', function(req, res){
    var content = req.body.content
    console.log(req.body.content)
    db.query('INSERT INTO nodelist(bucketList) VALUES(?)',[content], function(error, result){
        if (error)
        {
            console.log(error)
        }
        // console.log(result)
        res.json({
            id: result.insertId,
            content : content,
            do: false
        })
    })
})
app.put('/todos/:id/:do', function(req, res){
    var number = req.params.id
    var play = req.params.do
    db.query('UPDATE nodelist SET DO = ? WHERE number = ?',[play, number], function(error, result){
        if(error){
            console.log(error)
        }
        console.log(result)
        res.json( {
            result : 1
        })
    })
})
app.delete('/todos/:id', function(req, res){
    var number = req.params.id
    db.query('DELETE FROM nodelist WHERE number = ?',[number], function(error, result){
        if(error)
        {
            console.log(error)
        }
        console.log(result)
        if(result.affectedRows){ // 1 : true , 0 : false
            res.json ({
                result : 1
            })
        }
        else{
            res.json ({
                result : 0
            })
        }
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// db.end();