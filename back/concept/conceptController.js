const Concept = require('./concept-model');

module.exports = class ConceptController{
	async create(name){
		await Concept.create({name})
	}

	async getAll() {
		return await Concept.find({}).populate('votes', '-_id').exec()
	}

	async getRandom() {
		const count = await Concept.count().exec()
		var random = Math.floor(Math.random() * count)
		return await Concept.findOne().skip(random).populate('votes', '-_id').exec()
	}

	async addVoteToConcept(vote, conceptId) {
		await Concept.findOneAndUpdate({ _id: conceptId }, { $push: { votes: vote } }, { upsert:true, new:true },
		function (error, success) {
			if (error) {console.log(error)}
		})
	}

	async getVoteCount(conceptId) {
		return await Concept.aggregate([{ $match: { _id: conceptId } }, { $project: { votes: { $size: '$votes'} } }])
	}

	//TODO : une fonction qui compte le nombre de votes attachés à un concept et le renvoie pour affichage front
	//TODO : une fonction DELETE

}