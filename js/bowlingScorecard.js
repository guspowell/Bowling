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
	// first = new Frame(1);
	// second = new Frame(2);
	// third = new Frame(3);
	// fourth = new Frame(4);
	// fifth = new Frame(5);
	// sixth = new Frame(6);
	// seventh = new Frame(7);
	// eighth = new Frame(8);
	// ninth = new Frame(9);
	// tenth = new Frame(10);
};