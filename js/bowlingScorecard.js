var Frame = function(round) {
	this.totalScore = 0;
	this.bowlsLeft = 2;
	this.firstScore = null;
	this.secondScore = null;
	this.pinsLeft = 10;
	this.currentFrame = round;
};

Frame.prototype.firstBowl = function(pins) {
	if (pins > 10) { throw Error("There are only 10 pins") };
	if (pins < 10) {
		this.bowlsLeft -= 1;
		this.firstScore = pins;
		this.pinsLeft = this.pinsLeft - pins;
	}
	else {
		this.isAStrike();
		this.nextFrame();
	}
};

Frame.prototype.secondBowl = function(pins) {
	if (this.firstScore === null) { throw Error("You have not bowled your first bowl") };
	if (pins > 10) { throw Error("There are only 10 pins") };
	if (this.firstScore < 10) {
		if (this.firstScore + pins === 10) {
			this.isASpare();
		}
		else {
			this.bowlsLeft -= 1;
			this.secondScore = pins;
			this.pinsLeft = this.pinsLeft - pins;
			this.nextFrame();
		}
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
	console.log('X');
};

Frame.prototype.isASpare = function() {
	this.secondScore = '/';
	this.totalScore = 10;
	this.bowlsLeft = 0;
	this.pinsLeft = 0;
	this.nextFrame();
	console.log('/');
};


Frame.prototype.nextFrame = function() {
	new Frame(this.currentFrame + 1);
};

Frame.prototype.frameScore = function() {
	this.totalScore = this.firstScore + this.secondScore;
};


var Scorecard = function() {
	this.cumulitiveScore = 0;
	this.players = 0;
	this.playerList = [];
	this.scorecardFrames = [ new Frame(1), new Frame(2), new Frame(3) ];
};

Scorecard.prototype.addPlayer = function(name) {
	this.players += 1;
	this.playerList.push(name);
};
