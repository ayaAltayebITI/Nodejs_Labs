const express = require('express');
const controller = require('./controller.js');
const ejs = require('ejs');
const fs = require('fs');

app = express();

app.set('view engine','ejs');

app.use(express.urlencoded());
app.post("/users/add",(req,res)=>{
    const name = req.body.Name;
    const age = req.body.Age;
    console.log(name);
    console.log(age);
    controller.adduser(name,age);
    res.redirect("/");
});
//////////////////////////////////////////////////////////
/*
app.get("/user/:id",(req,res)=>{
  
    
});*/
/////////////////////////////////////////////////////////
app.get("/users",(req,res)=>{
    controller.listUsers();
    
});
//////////////////////////////////////////////////////////
app.get("/",(req,res)=>{
     res.render("index");
});
//////////////////////////////////////
app.listen(3000,()=>{
    console.log('app is listening in port 3000');
});