const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static("public"))
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB")

const articleSchema = {
    title : String,
    content : String
}

const Article = mongoose.model("Article", articleSchema)

//Targetting all the articles
app.route("/article")
    .get((req, res) => {
        Article.find().then((foundArticle) => {
            res.send(foundArticle)
        })
    })
    .post((req, res) => {
        const newArticle = new Article({
            title : req.body.title,
            content : req.body.content
        })

        newArticle.save().then((result) => {
            res.send(result)
        })
    })
    .delete((req, res) => {
        Article.deleteMany().then(
            res.send("Succesfully deleted all the articles")
        )
    })

//Targetting a specific route
app.route("/article/:articleTitle")
    .get((req, res) => {
        Article.findOne({title : req.params.articleTitle}).then((foundArticle) => {
            res.send(foundArticle)
        })
    }) 

    .put((req, res) => {
        Article.updateOne({title : req.params.articleTitle},{
            title : req.body.title,
            content : req.body.content
        }). then(
            res.send("Successfully updated article")
        )
    })
    .patch((req, res) => {
        Article.updateOne(
            {title : req.params.articleTitle},
            {$set : req.body}
        ).then(
            res.send("successfully pathched the article")
        )
    })
    .delete((req, res) => {
        Article.deleteOne(
            {title : req.params.articleTitle}
        ).then((blog) => {
            if (!blog){
                res.status(404).send()
            }
            res.send(blog)
        }).catch((error) => {
            res.status(500).send(error)
        })//catch function is not understand how it is working
    })

app.listen(3000, () => {
    console.log("Server started on port 3000")
})