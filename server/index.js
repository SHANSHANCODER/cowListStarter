const express = require('express');
const path = require('path');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let db = require("../database/mongo/index.js")
var bodyParser = require('body-parser')

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/api/cows', (req, res) => {
  db.retrieveall((err,result)=>{
    if(err){
      res.status(404).send(err)
    } else {
      console.log("res.data>>>>>",result)
      res.status(200).send(result)
    }
  })

 // res.send('Hello from the server!');
})

app.post('/api/cows', (req,res)=>{
  console.log(req.body)
  //res.status(201).send()
  db.save(req.body,(err,result)=>{
    if(err){
      res.status(500).send(err)
    } else {
      res.status(201).send(result)
    }
  })
})

app.delete('/api/cows/:id',(req,res)=>{
  console.log("req.param",req.params)
  console.log("req.query",req.query)
  db.deleteOne(req.params.id,(err,result)=>{
    if(err){
      res.status(500).send(err)
    } else{
      res.status(201).send(result)
    }
  })
})


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
    readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
      if(choice==='mongo') {
        console.log('Your db is Mongo');
        db = require('../database/mongo');
      } else if(choice === 'mysql') {
        console.log('Your db is mysql');
        db = require('../database/mysql');
      } else {
        console.log('Stop node, restart and try again, valid options are mysql and mongo')
      }
    })

});
