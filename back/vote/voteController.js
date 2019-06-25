const Vote = require('./vote-model')


module.exports = class VoteController{

	async create(concept_id, orientation) {
		Vote.create({
			concept: concept_id,
			orientation
		})
		//TODO mettre a jour la liste des votes du concept
	}

	async getAll() {
		return await Vote.find({})
	}

}