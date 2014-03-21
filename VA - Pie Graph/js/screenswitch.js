$(document).ready(function(){

var prevScreen;

function setprevScreen(){
	switch($('#screen').text()){
		case Japanese:
			prevScreen = deck;
			break;
		case Decks:
			prevScreen = home;
			break;
	}
}

function getPrevScreen(){
	return prevScreen;
	}

}
	
	var prev = getPrevScreen();

	$('#goToAll').click(setprevScreen());

	$('#bkBtn').click(
	switch(prev){
		case deck:
			$('#back').attr("href","deckscreen.html");
			break;
		case home:
			$('#back').attr("href","homescreen.html");
			break;
	});

});
