const express = require("express")
const https = require ("https")
const bodyParser = require("body-parser")
var app = express()

app.use(bodyParser.urlencoded({extended : true}))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    const query = req.body.cityInput
    const appId = "6920f1507a773f8576eacbc4cc20f16f"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + ",&units=" + unit + "&appid=" + appId
    
    https.get(url, (response) => {
        console.log(response.statusCode)

        response.on("data", (data) => {
            const weatherData = JSON.parse(data)
            const temperature = weatherData.main.temp
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<p>The weather condition is " + description)
            res.write("<h1>The temperature in London is " + temperature + " degree celcius</h1>")
            res.write("<img src = "+ imageUrl +">")
            res.send()
        })
    })

})

app.listen(3000, function() {
    console.log ("The server is started on port 3000")
})