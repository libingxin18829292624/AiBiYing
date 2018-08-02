const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/writefile',(req,res)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, OPTIONS');
  console.log(req.body.storedData)
  res.send(req.body.storedData);
  fs.writeFile('./json/index.json',req.body.storedData,()=>{
    console.log("Write data over.")
  });
});

app.listen(3000,()=>{
  console.log('Server is ready on port 3000.')
})
