const Vote = require('./vote-model')


module.exports = class VoteController{

	create(concept_id, orientation) {
		Vote.create({
			concept: concept_id,
			orientation
		}, (err, voteSaved) => {
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

	read(vote){
		let monConcept = this.concepts.find((concept)=>{
			return concept.name === vote.conceptId;
		});
		if(vote.orientation === "gauche"){
			monConcept.voteGauche();
		}else{
			monConcept.voteDroite();
		}
	}
}