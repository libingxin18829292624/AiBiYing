const express = require('express')
const app = express();
const Data = require('./json/index')

app.use('/',(req,res)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, OPTIONS');
  res.json(Data)
});

app.listen(3000,()=>{
  console.log('server is ready on port 3000.')
})
