var express = require("express");
var app = express();


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.send('Hi there!');
});

app.get('/bye', function(req, res){
    res.send('asdf');
});

app.get('/dog', function(req, res){
    console.log("SOMEONE made a request");
});

//redering html pages
app.get('/mwah', function(req, res){
    res.render("mwah");
});

app.get('/love/:dog', function(req, res){
    var thing = req.params.dog;
    res.render("love", {thingVar: thing});
});
//route parameters.
app.get('/r/:subredditName/comments/:id/:title', function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to" + subreddit.toUpperCase()+ " SUBREDDIT");    
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "post 1", author: "susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky", author: "Colt"}
    ];
    
    res.render ("posts", {posts: posts});
});

//this needs to go at the end since the order matters.
app.get("*", function haha() {
    res.send('bahahaha');
});

app.listen(3000, function(){
    console.log("server has started!!");
});