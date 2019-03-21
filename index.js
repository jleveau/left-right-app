const VoteController = require("./voteController.js");
const Vote = require("./vote.js");
const Concept = require("./concept.js");

const merguez = new Concept("merguez");
const controller = new VoteController();
controller.setConcepts([merguez]);

console.log(merguez.getOrientation());
const vote1 = new Vote("merguez", "gauche");
const vote2 = new Vote("merguez", "droite");

controller.readVote(vote1);
controller.readVote(vote2);
controller.readVote(vote2);
console.log(merguez.getOrientation());
