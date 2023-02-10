const express = require('express')
const app = express()

const db = require('./database')

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });
  

app.get('/data', (req,res)=>{
	db.all('SELECT * FROM books', (error, books)=>{
		try{
			res.json({books})
		}catch(error){
			res.status(500).json({error})
		}
	})
});

app.listen(3000, ()=>{
	console.log('API listening on port 3000');
})