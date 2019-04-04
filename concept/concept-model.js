var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var conceptSchema = new Schema({
  name: String,
  votes: [ObjectId]
});

module.exports = mongoose.model('Concept', conceptSchema);

/*
module.exports=class Concept {
	constructor(name){
		this.name = name;
		this.gauche = 0;
		this.droite = 0;
	}
	getOrientation(){
		const total = this.gauche+this.droite;
		if(total <= 0){
			console.log("No vote yet");
		}else{
			return this.name + " : " + this.gauche/total*100;
		}
	}
	voteGauche(){
		this.gauche ++;
	}
	voteDroite(){
		this.droite ++;
	}
}
*/