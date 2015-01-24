var Frame = function(round) {
	this.totalScore = 0;
	this.numberOfBowls = 0;
	this.firstScore = 0;
	this.secondScore = 0;
};

Frame.prototype.firstBowl = function(pins) {
	if (this.numberOfBowls <= 2) { this.numberOfBowls += 1; }
	this.firstScore = pins
	if (pins == 10) {
		this.totalScore = 10;
		return "X";
	}
};

Frame.prototype.secondBowl = function(pins) {
	if (this.firstScore < 10) {
		if (this.numberOfBowls <= 2) {
			this.numberOfBowls += 1;
			this.secondScore = pins;
		}
	} else {
		return "cannot bowl after a spare";
	}
};

Frame.prototype.frameScore = function() {
	this.totalScore = this.firstScore + this.secondScore;
};


var Scorecard = function() {
	this.cumulitiveScore = 0;
	this.players = 0;
	this.playerList = [];
};

Scorecard.prototype.addPlayer = function(name) {
	this.players += 1;
	this.playerList.push(name);
};







