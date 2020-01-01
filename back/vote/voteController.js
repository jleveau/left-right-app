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
				console.log(room);
				conceptController.addVoteToConcept(room, concept._id);
			}
		})
	}
	
	async deleteUnattached() {
        const votes = await Vote.find({}).populate('concept', '_id')
		let toDelete = votes.filter(vote => vote.concept === null).map(vote => vote._id)
		
        return Vote.deleteMany({ '_id': { $in: toDelete } }).exec();
    }

	//test
	async getUnattached() {
        const votes = await Vote.find({}).populate('concept', '_id').exec();
        return votes.filter(vote => vote.concept === null)
    }

	getAll() {
		return Vote.find({}).populate('concept', '-_id').exec();
	}

	//TODO : une fonction DELETE

}