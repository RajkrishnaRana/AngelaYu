const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send ("<h1>Hello World</h1>");
});

app.get("/about", function(req, res) {
    res.send("My name is Rajkrishna Rana, I am learning express js")
});

app.get("/contact", function (req, res) {
    res.send("Contact Me : rajkrishnaranastudy@gmail.com")
})

app.get("/hobby", function(req, res) {
    res.send("My hobby is table tennis")
})

app.listen(3000, function() {
    console.log("Server is Starting");
});