const ConceptController = require('../concept/conceptController');
const Vote = require('./vote-model')

const conceptController = new ConceptController

module.exports = class VoteController{

	async create(concept, orientation) {
		console.log(concept);
		Vote.create({
			concept: concept._id,
			orientation
		}, function (err, room) {
			if (err) {

			} else {
				conceptController.addVoteToConcept(room, concept._id);
			}
		})
	}

	async getAll() {
		return await Vote.find({}).populate('concept', '-_id').exec()
	}

	//TODO : une fonction DELETE

}