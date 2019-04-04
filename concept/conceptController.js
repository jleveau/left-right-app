const Concept = require('./concept-model')

module.exports = class ConceptController{
	create(name){
		Concept.create({
			name
		}, (err, concept) => {
			if(err){
				console.log(err)
			}
		})
	}

	getAll() {
		Concept.find({}, (err, concepts) => {
			if (err) {
				console.log(err)
			} else {
				console.log(concepts)
			}
		})
	}
}