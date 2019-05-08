const Vote = require('./vote-model')


module.exports = class VoteController{
	constructor(){
		this.concepts = [];
	}
	setConcepts(concepts){
		this.concepts = concepts;
	}

	createVote(concept_id, orientation) {
		Vote.create({
			concept: concept_id,
			orientation
		}, (err, voteSaved) => {
			if (err) {
				console.err(err)
			} else {
				console.log('Success', voteSaved)
			}
		});
	}

	readVote(vote){
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