const Concept = require('./concept-model');

module.exports = class ConceptController {

	async create(name) {
		await Concept.create({name})
	}

	async delete(conceptId) {
		await Concept.findOneAndDelete({ _id: conceptId },
		function (error, success) {
			if (error) {console.log(error)}
		})
	}

	async getAll() {
		return await Concept.find({}).populate('votes', '-_id').exec()
	}

	async getRandom() {
		const count = await Concept.count().exec()
		const random = Math.floor(Math.random() * count)
		return await Concept.findOne().skip(random).populate('votes', '-_id').exec()
	}

	async addVoteToConcept(vote, conceptId) {
		Concept.findOneAndUpdate({ _id: conceptId }, { $push: { votes: vote._id } }, { upsert:true, new:true },
		function (error, success) {
			if (error) {console.log(error)}
		})
	}

}