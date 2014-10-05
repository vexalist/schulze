$(function() {
	$( "#sortable" ).sortable({ placeholder: "ui-state-highlight" });
	$( "#sortable" ).disableSelection();
});

function addCandidate(candidate) {
	$("#sortable").append("<li class='default'><div class='candidate-name'>" + candidate + "</div><div class='remove-candidate'><span></span></div></li>");
}

function removeCandidate(candidate){
	$(candidate).remove();
}


$(document).on("click", ".add", function(){
	var candidate = $('#enter-candidate').val();
	
	if(candidate === "") {
		alert("Hey, you didn't write anything!")

	} else {
		addCandidate(candidate);
		$('#enter-candidate').val("");
	}
});

$(document).on("click", ".remove-candidate span", function(){
	var candidate = $(this).parents('.default');
	removeCandidate(candidate);
});


function addVote() {
	vote = [];
	$('#sortable li').each( function(){
		vote.push($(this).text());
	});
}

$(document).on("click", "button.vote", function() {
	var voterName = $('input.voter-name').val();
	if(voterName === "") {
		alert("Hey, you didn't put your name in there!")
	} else {
		addVote();
		$(".container").append("<h4>" + voterName + "</h4>" + vote);
	}
});