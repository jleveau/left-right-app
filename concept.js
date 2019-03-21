module.exports=class Concept {
	constructor(name){
		this.name = name;
		this.gauche = 0;
		this.droite = 0;
	}
	getOrientation(){
		const total = this.gauche+this.droite;
		if(total <= 0)
			{console.log("No vote yet");}
		else{
		return this.gauche/total*100;
		}
	}
	voteGauche(){
		this.gauche ++;
	}
	voteDroite(){
		this.droite ++;
	}
}