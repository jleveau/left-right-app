const VoteController = require("./vote/voteController.js");
const ConceptController = require("./concept/conceptController.js");
const mongoose = require('mongoose')
const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const PORT = 5000;


const voteController = new VoteController()
const conceptController = new ConceptController()


const connectWithRetry = function () {
    return mongoose.connect("mongodb://localhost:27017/myapp")
        .then(() => {
            console.log("Connecting to database")
        })
        .catch((err) => {
            if (err) {
                console.error(err)
                setTimeout(connectWithRetry, 5000)
            }
        })
}

connectWithRetry()

const api = express();


api.use(morgan("common"));  
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json())

api.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

api.get('/concepts', async (req, res) => {
    const concepts = await conceptController.getAll()
    res.json(concepts);
});

api.post('/concept', async (req, res) => {
    try {
        await conceptController.create(req.body.concept)
        res.sendStatus(200)
    } catch(e) {
        res.send(e).status(500)
    }
});
  

  

let db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))


api.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`)
})
