var scorecard = new Scorecard();
var frame = scorecard.frames[0];

$( function() {

	$('.first-bowl').change(function() {
		frame.firstBowl(
			$(this).val();
		);
	});
	
});


// var aScorecard = new Scorecard();

// $('form.name').on('submit',function(e){
//     e.preventDefault();
//     var name = $(this).children('input.name').val();
//     aScorecard.addPlayer(name);
// });
