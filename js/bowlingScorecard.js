var Frame = function() {
	this.totalScore = 0;
	this.numberOfBowls = 0;
	this.firstScore = 0
	this.secondScore = 0
};

Frame.prototype.firstBowl = function(pins) {
	if (this.numberOfBowls <= 2) { this.numberOfBowls += 1; }
	this.firstScore = pins
	if (pins = 10) {
		this.totalScore = 10;
	}
};

Frame.prototype.secondBowl = function(pins) {
	if (frame.firstScore < 10) {
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