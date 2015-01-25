describe("frame", function(round) {

	var frame;

	beforeEach(function() {
		frame = new Frame(1);
	});

	describe("by default", function() {

		it("should have a score of 0", function() {
			expect(frame.totalScore).toEqual(0);
		});
		
		it("should have 2 throws", function() {
			expect(frame.bowlsLeft).toEqual(2);
		});

		it("should be on frame 1", function() {
			expect(frame.currentFrame).toEqual(1);
		});

	});

	describe("frames", function() {

		it("should be able to move to the next frame", function() {
			frame.nextFrame();
			expect(frame.currentFrame).toEqual(2);
		});

	});

	describe("bowls", function() {

		it("when first bowl is bowled the number of bowls should go down by 1", function() {
			frame.firstBowl(2);
			expect(frame.bowlsLeft).toEqual(1);
		});

		it("when second bowl is bowled the number of bowls should go down by 1", function() {
			frame.firstBowl(2);
			frame.secondBowl(2);
			expect(frame.bowlsLeft).toEqual(0);
		});

		// it("when a 10 is bowled first, there should be a strike", function() {
		// 	frame.firstBowl(10);
		// 	expect(frame.bowlsLeft).toEqual(0);
		// 	expect(this.pinsLeft).toEqual(0);
		// });

		it("when a 10 is bowled first, a player should not get a second bowl", function() {
			frame.firstBowl(10);
			expect(frame.secondBowl(5)).toThrowError("cannot bowl after a strike");
			expect(frame.totalScore).toEqual(10)
		});

		it("should move to the second frame if a strike is bowled first", function() {
			expect(frame.currentFrame).toEqual(1)
			frame.firstBowl(10);
			expect(frame.currentFrame).toEqual(2)
		});

	});

	describe("Scoring", function() {

		it("when the player bowls the first bowl they can log the score", function() {
			frame.firstBowl(5);
			expect(frame.firstScore).toEqual(5);
			expect(frame.pinsLeft).toEqual(5);
		});

		it("when the player bowls the second bowl they can log the score", function() {
			frame.firstBowl(1);
			frame.secondBowl(3);
			expect(frame.secondScore).toEqual(3);
			expect(frame.pinsLeft).toEqual(6);
		});

		it("the total score should increase by the sum of the two bowls", function() {
			frame.firstBowl(3);
			frame.secondBowl(4);
			frame.frameScore();
			expect(frame.totalScore).toEqual(7);
		});

	});

	describe("strike", function() {

		it("knock 10 pins on first bowl", function() {
			frame.isAStrike();
			expect(frame.totalScore).toEqual(10);
		});

	});

	describe("spare", function() {

		it("knocks down all pins on the second bowl", function() {

		});

	});

});


describe("scorecard", function() {

	var scorecard;

	beforeEach(function() {
		scorecard = new Scorecard();
	});	

	describe("default", function() {

		it("should have a default cumulitive score of 0", function() {
			expect(scorecard.cumulitiveScore).toEqual(0)
		});

		it("should have no players to start", function() {
			expect(scorecard.players).toEqual(0);
		});

		it("", function() {
			
		});

	});

	describe("names", function() {
		
		it("should be able to add a player", function() {
			scorecard.addPlayer('gus');
			expect(scorecard.players).toEqual(1);
			array = scorecard.playerList;
			expect(array[0]).toEqual('gus');
		});

	});

});












