describe("frame", function() {

	var scorecard;

	beforeEach(function() {
		frame = new Frame();
	});

	describe("by default", function() {

		it("should have a score of 0", function() {
			expect(frame.totalScore).toEqual(0);
		});
		
		it("should have 0 throws", function() {
			expect(frame.numberOfBowls).toEqual(0);
		});

	});

	describe("number of bowls", function() {

		it("when first bowl is bowled the number of bowls should go up by 1", function() {
			frame.bowl();
			expect(frame.numberOfBowls).toEqual(1)
		});

		it("should have a maximum of 2 bowls", function() {
			frame.bowl();
			frame.bowl();
			frame.bowl();
			expect(frame.numberOfBowls).toEqual(2);
		});

	});

	describe("Scoring", function() {

		it("when the player bowls the first bowl they can log the score", function() {
			expect(frame.firstScore(5)).toEqual(5);
		});

		it("when the player bowls the second bowl they can log the score", function() {
			expect(frame.secondScore(3)).toEqual(3);
		});

		it("the total score should increase by the sum of the two bowls", function() {
			frame.firstScore(3);
			frame.secondScore(4);
			expect(frame.frameScore()).toEqual(7);
		});

	});



});