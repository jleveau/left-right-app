const Concept = require('./concept-model')

module.exports = class ConceptController{
	async create(name){
		await Concept.create({name})
	}

	async getAll() {
		return await Concept.find({}).populate('votes.orientation').exec()
	}

	async getRandom() {
		const count = await Concept.count().exec()
		var random = Math.floor(Math.random() * count)
		return await Concept.findOne().skip(random).populate('votes.orientation').exec()
	}
}