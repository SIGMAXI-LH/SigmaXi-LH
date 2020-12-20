const express=require("express")
const morgan = require('morgan');
const bodyParser=require('body-parser')
const path=require('path');
var cors = require('cors')
var fs = require('fs');
const { spawn } = require('child_process');
const childPython =spawn('python',['../playlist/Final.py'])





const app=express()
app.use(morgan('dev'));
const port =process.env.PORT || 8080



//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//Cors setup
app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.post('/upload',(req,res)=>{
  console.log(req.body);

fs.writeFile('myfile.txt', req.body.playlist, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  

childPython.stdout.on('data',(data)=>{
  console.log(`stdout:${data}`)
})


childPython.stderr.on('data',(data)=>{
  console.log(`stderr:${data}`)
})

childPython.on('close',(code)=>{
  console.log(`Child Process exited with code :${code}`)
})

fs.readFile("happy.json", function(err, data) { 
      
  // Check for errors 
  if (err) throw err; 
 
  // Converting to JSON 
  const songs = JSON.parse(data); 
    
  console.log(songs); // Print songs
  
  res.send(songs);
}); 

})



app.listen(port,()=>{
    console.log("Server is up on the port "+port)
})
