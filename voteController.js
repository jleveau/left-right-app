module.exports = class VoteController{
	constructor(){
		this.concepts = [];
	}
	setConcepts(concepts){
		this.concepts = concepts;
	}
	readVote(vote){
		let monConcept = this.concepts.find((concept)=>{
			return concept.name === vote.conceptId;
		});
		if (!monConcept) {
			console.log("concept is not defined " + vote.conceptId)
			return
		}
		if(vote.orientation === "gauche"){
			monConcept.voteGauche();
		}else{
			monConcept.voteDroite();
		}
	}
}