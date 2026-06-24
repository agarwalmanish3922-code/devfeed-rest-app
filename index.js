const express = require("express");
const app = express();
const {v4:uuidv4}=require('uuid');
//uuidv4(); write where you need unique id
const methodOverride = require('method-override');

const port = 8080;
const path = require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts =[
    {
        username : "UU",
        content : "I LOve COding",
        id:uuidv4()
    },
    {
        username :"Manish",
        content : "Hard work + consistency == success",
        id:uuidv4()
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    if(!username || !content) return res.redirect("/posts/new");
    let id=uuidv4();
    posts.push({username,content,id});
    //res.send("post request working");
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id} =req.params;
    //console.log(id);
    let post =posts.find((p)=>id ===p.id);
    if(!post) return res.redirect("/posts");
    //res.send("request working");
    res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent= req.body.content;
    //console.log(newContent);
    let post =posts.find((p)=>id ===p.id);
    post.content = newContent;
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post =posts.find((p)=>id ===p.id);
    res.render("edit.ejs",{post});
})  

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts =posts.filter((p)=>id !==p.id);
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});