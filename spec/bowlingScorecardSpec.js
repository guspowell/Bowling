describe("bowlingScorecard", function() {

	var scorecard;

	// beforeEach(function() {
	// 	scorecard = new Scorecard();
	// });

	describe("by default", function() {

		it("should have a score of 0", function() {
			scorecard = new Scorecard();
			expect(scorecard.totalScore).toEqual(0);
		});

	});



});