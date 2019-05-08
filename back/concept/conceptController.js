const Concept = require('./concept-model')

module.exports = class ConceptController{
	async create(name){
		await Concept.create({name})
	}

	async getAll() {
		return await Concept.find({}).exec()
	}
}