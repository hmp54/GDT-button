//setup for express server 
const express = require('express'); 
const app = express(); 
const cors = require('cors'); //not completley sure what this package does yet, research more on networking later. Resources say this is necessary for any self-made api's 

app.use(cors()); 
app.use(express.json()); 

//import mysql into project 
const mysql = require('mysql'); 

//connect to mysql USERS database 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'cosc280!',
    database: 'USERS'
})

app.post('/create', (req, res) => { 
    console.log(req.body)
    const email = req.body.email; 
    const username = req.body.username; 
    const password = req.body.password;
    
    //insert new user account information into the database
    db.query('INSERT INTO user_accounts (email, username, password) VALUES (?,?,?,?)', [email, username, password], (err ,result) => {
        if(err){
            console.log(err)
        } else{
            res.send("Values inserted"); 
        }
    })
})


//start express server 
app.listen(3000, () =>{
    console.log('listening at port 3000'); 
})