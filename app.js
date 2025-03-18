//This imports express
const express = require('express');
//use dotenv to expose our environment variables
require ('dotenv').config();
//we create a new instances of express as the app object
const app = express();
//port assignment
const PORT = process.env.PORT;

//router handler that will define url/url that does something
app.get('/home',(req,res)=>{
  res.send('hello world!');
});

//start our server 
app.listen(PORT, () => {
  console.log('server started on port: ${PORT}');
});
