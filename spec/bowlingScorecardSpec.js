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

	describe("bowls", function() {

		it("when first bowl is bowled the number of bowls should go up by 1", function() {
			frame.firstBowl();
			expect(frame.numberOfBowls).toEqual(1)
		});

		it("when second bowl is bowled the number of bowls should go up by 1", function() {
			frame.firstBowl();
			frame.secondBowl();
			expect(frame.numberOfBowls).toEqual(2)
		});

	});

	describe("Scoring", function() {

		it("when the player bowls the first bowl they can log the score", function() {
			frame.firstBowl(5);
			expect(frame.firstScore).toEqual(5);
		});

		it("when the player bowls the second bowl they can log the score", function() {
			frame.secondBowl(3);
			expect(frame.secondScore).toEqual(3);
		});

		it("the total score should increase by the sum of the two bowls", function() {
			frame.firstBowl(3);
			frame.secondBowl(4);
			frame.frameScore();
			expect(frame.totalScore).toEqual(7);
		});

	});



});