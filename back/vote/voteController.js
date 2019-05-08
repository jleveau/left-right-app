const Vote = require('./vote-model')


module.exports = class VoteController{

	create(concept_id, orientation) {
		Vote.create({
			concept: concept_id,
			orientation
		}, (err) => {
			if (err) {
				console.err(err)
			} else {
			}
		});
	}

	getAll() {
		Vote.find({}, (err, concepts) => {
			if (err) {
				console.log(err)
			} else {
				console.log(concepts)
			}
		})
	}

}