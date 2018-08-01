const express = require('express')
const app = express();
const Data = require('./json/index')
const fs = require('fs')

app.use('/api',(req,res)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, OPTIONS');
  res.json(Data)
});

app.use('/writefile',(req,res)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, OPTIONS');
  // let data = new Buffer(req.storedData);
  // fs.writeFile('./json/index.json',data);
  res.send('success')
});

app.listen(3000,()=>{
  console.log('server is ready on port 3000.')
})
