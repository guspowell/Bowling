var Frame = function(round) {
	this.totalScore = 0;
	this.bowlsLeft = 2;
	this.firstScore = 0;
	this.secondScore = 0;
	this.pinsLeft = 10;
	this.currentFrame = round;
};

Frame.prototype.firstBowl = function(pins) {
	if (pins < 10) {
		this.bowlsLeft -= 1;
		this.firstScore = pins;
		this.pinsLeft = this.pinsLeft - pins;
	}
	else {
		this.isAStrike();
	}
};

Frame.prototype.secondBowl = function(pins) {
	if (this.firstScore < 10) {
		this.bowlsLeft -= 1;
		this.secondScore = pins;
		this.pinsLeft = this.pinsLeft - pins
		this.nextFrame();
	}
	else {
		throw Error('cannot bowl after a strike');
	}
};

Frame.prototype.isAStrike = function() {
	this.firstScore = 'X'
	this.secondScore = '-'
	this.totalScore = 10;
	this.bowlsLeft = 0;
	this.pinsLeft = 0;
	this.nextFrame();
};

Frame.prototype.isASpare = function(pins) {
	this.firstScore = pins
	this.secondScore = 10 - pins
	this.totalScore = 10;
	this.bowlsLeft = 0;
	this.pinsLeft = 0;
	this.nextFrame();
};


Frame.prototype.nextFrame = function() {
	this.currentFrame += 1;
};

Frame.prototype.frameScore = function() {
	this.totalScore = this.firstScore + this.secondScore;
};


var Scorecard = function() {
	this.cumulitiveScore = 0;
	this.players = 0;
	this.playerList = [];
	this.frames = [ new Frame(1), new Frame(2), new frame(3) ];
};

Scorecard.prototype.addPlayer = function(name) {
	this.players += 1;
	this.playerList.push(name);
};







