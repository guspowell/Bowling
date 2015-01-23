var Frame = function() {
	this.totalScore = 0;
	this.numberOfBowls = 0;
	this.firstScore = 0
	this.secondScore = 0
};

Frame.prototype.firstBowl = function(pins) {
	if (this.numberOfBowls <= 2) { this.numberOfBowls += 1; }
	this.firstScore = pins
};

Frame.prototype.secondBowl = function(pins) {
	if (this.numberOfBowls <= 2) { this.numberOfBowls += 1; }
	this.secondScore = pins
};

Frame.prototype.frameScore = function() {
	this.totalScore = this.firstScore + this.secondScore;
};