const VoteController = require("./vote/voteController.js");
const ConceptController = require("./concept/conceptController.js");
const mongoose = require('mongoose')

const connectWithRetry = function () {
    return mongoose.connect("mongodb://localhost:27018/myapp")
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

let db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))

const voteController = new VoteController()
const conceptController = new ConceptController()

conceptController.getAll();

