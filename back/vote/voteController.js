const ConceptController = require('../concept/conceptController');
const Vote = require('./vote-model')

const conceptController = new ConceptController

module.exports = class VoteController {

	async create(concept, orientation) {
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
	
	async deleteUnattached() {
		await Vote.deleteMany( { 'concept': null }, function(err, res) {
			if (err) {
				return err
			} else {
				return res.deletedCount
			}
		})
	}

	//test
	getUnattached() {
		return Vote.find( { concept: null } ).exec();
	}

	async getAll() {
		return await Vote.find({}).populate('concept', '-_id').exec();
	}

	//TODO : une fonction DELETE

}