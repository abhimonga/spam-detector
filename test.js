var datum = require('datumbox').factory("30ca946b7d0e7579a40d8dc6e063ef06");
var express = require('express');
var app = express();
var isSpam = require("spam-detector");
var port = process.env.port;
app.get("/url/:url", (req, res) => {
    var url = req.params.url;
    res.send(url + "lol");
})
isSpam("http://www.wasel.com", function(err, data) {
    console.log(data);
});
var str = "This is test"
datum.spamDetection(str, function(err, data) {
    if (err)
        return console.log(err);

    console.log(data); // Remarks here.
});

app.listen(port, () => {
    console.log("Connected successful");
})