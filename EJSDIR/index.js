const express = require("express");
const app =express();
const path = require("path")

let port = 8080;

app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.set("view engin","ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/home",(req,res)=>{
    res.render("home.ejs");
})
app.get("/hello",(req,res)=>{
    res.send("hello");
})
// app.get("/ig/:username",(req,res)=>{
//     const followers = ["Rohit","Sumit","Utkarsh","Deepak","Lakshman"];
//     let {username} = req.params;
//     // console.log(username);
//     res.render("username.ejs" ,{username,followers});
// });


app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json")
    const data = instaData[username]
    // console.log(instaData);
    if(data){
 // console.log(username);
 res.render("username.ejs", {data});
    }else{
        res.render("err.ejs");
    }
   
});


app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random() * 6 ) + 1;
    res.render("rolldice.ejs" , {diceVal});
})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
});

