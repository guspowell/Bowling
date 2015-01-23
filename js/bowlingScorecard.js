var Frame = function() {
	this.totalScore = 0;
	this.numberOfBowls = 0;
};

Frame.prototype.bowl = function() {
	var currentNumberOfBowls = this.numberOfBowls + 1;
	if (currentNumberOfBowls > 2) {
		return this.numberOfBowls = 2;
	}
	else {
		return this.numberOfBowls = currentNumberOfBowls;
	}
};

Frame.prototype.firstScore = function(pins) {
	return pins;
};

Frame.prototype.secondScore = function(pins) {
	return pins;
};

Frame.prototype.frameScore = function() {
	return this.firstScore(3) + this.secondScore(4);
};