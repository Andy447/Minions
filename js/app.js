// timer

var flagclock = 0;
var flagstop = 1;
var stoptime = 0;
var currenttime;
var splitdate = '';
var output;
var clock;

function startstop()
{
    var startstop = document.getElementById('startstoptimer');
    var startdate = new Date();
    var starttime = startdate.getTime();
    if(flagclock==0)
    {
        startstop.value = 'Pause';
        flagclock = 1;
        counter(starttime);
    }
    else
    {
        startstop.value = 'Resume';
        flagclock = 0;
        flagstop = 1;
        splitdate = '';
    }
}

function counter(starttime)
{
    output = document.getElementById('output');
    clock = document.getElementById('clock');
    currenttime = new Date();
    var timediff = currenttime.getTime() - starttime;
    if(flagstop == 1)
    {
        timediff = timediff + stoptime
    }
    if(flagclock == 1)
    {
        clock.value = formattime(timediff,'');
        refresh = setTimeout('counter(' + starttime + ');',10);
    }
    else
    {
        window.clearTimeout(refresh);
        stoptime = timediff;
    }
}

function formattime(rawtime,roundtype)
{
    if(roundtype == 'round')
    {
        var ds = Math.round(rawtime/100) + '';
    }
    else
    {
        var ds = Math.floor(rawtime/100) + '';      
    }
    var sec = Math.floor(rawtime/1000);
    var min = Math.floor(rawtime/60000);
    ds = ds.charAt(ds.length - 1);
    if(min >= 60)
    {
        startstop();
    }
    sec = sec - 60 * min + '';
    if(sec.charAt(sec.length - 2) != '')
    {
        sec = sec.charAt(sec.length - 2) + sec.charAt(sec.length - 1);
    }
    else
    {
        sec = 0 + sec.charAt(sec.length - 1);
    }   
    min = min + '';
    if(min.charAt(min.length - 2) != '')
    {
        min = min.charAt(min.length - 2)+min.charAt(min.length - 1);
    }
    else
    {
        min = 0 + min.charAt(min.length - 1);
    }
    return min + ':' + sec;
}

// review screens: toggle showing question and answer & animations of card piles


$(document).ready(function(){

    $('#q1answer').hide();
    $('#q2answer').hide();
    $('#q1-super-long-arrow').hide();
    $('#q1-long-arrow').hide();
    $('#q2-short-arrow').hide();
    $('#q2-long-arrow').hide();

    $('#question2').hide();
    $('.difficulty-buttons').hide();
    $('#new-card').hide();
    $('#review-card-highlight').hide();

    $('#show-answer-btn-q2').hide();
    $('#show-answer-btn-q3').hide();

    $('#tq1answer').hide();
    $('#tquestion2').hide();
    $('#tquestion3').hide();



// show answer buttons for q1 and q2
    $('#show-answer-btn-q1').on(
        'click',
        function() {

            $('#tq1question, #tq1answer').toggle();
            $('#q1question, #q1answer').toggle();
            $('#show-answer-btn-q1').toggle();
            $('#difficulty-btn-q1').toggle();
            $('#tdifficulty-btn-q1').toggle();
            startstop();
            $('#startstoptimer').toggle();
        }
    );    
    $('#show-answer-btn-q2').on(
        'click',
        function() {
            $('#tq2question, #tq2answer').toggle();
            $('#q2question, #q2answer').toggle();
            $('#show-answer-btn-q2').toggle();
            $('#difficulty-btn-q2').toggle();
            $('#tdifficulty-btn-q2').toggle();
            startstop();
            $('#startstoptimer').toggle();
        }
    );   
    $('#show-answer-btn-q3').on(
        'click',
        function() {
            $('#tq3question, #tq3answer').toggle();
            $('#show-answer-btn-q3').toggle();
            $('#tdifficulty-btn-q3').toggle();
        }
    );

// difficulty buttons (hard, good, easy) for q1 and q2
    $('#difficulty-btn-q1 button').on(
        'click',
        function() {
            $('#question1, #question2').toggle();
            $('#q2question').show();
            $('#q2answer').hide();
            $('#difficulty-btn-q1, #show-answer-btn-q2').toggle();
            startstop();
            $('#startstoptimer').toggle();
        }
    );
    $('#difficulty-btn-q2 button').on(
        'click',
        function() {
            $('#question1, #question2').toggle();
            $('#q1question').show();
            $('#q1answer').hide();
            $('#difficulty-btn-q2, #show-answer-btn-q1').toggle();
            startstop();
            $('#startstoptimer').toggle();

        }
    );


    $('#tdifficulty-btn-q1 button').on(
        'click',
        function() {
            $('#tquestion1, #tquestion2').toggle();
            $('#tq2question').show();
            $('#tq2answer').hide();
            $('#tdifficulty-btn-q1, #show-answer-btn-q2').toggle();
        }
    );
    $('#tdifficulty-btn-q2 button').on(
        'click',
        function() {
            $('#tquestion2, #tquestion3').toggle();
            $('#tq3question').show();
            $('#tq3answer').hide();
            $('#tdifficulty-btn-q2, #show-answer-btn-q3').toggle();

        }
    );


// individual difficulty buttons for q1, which toggle the images of the card piles
    $('#new-card-hard').on(
        'click',
        function() {
            $('#q1-cards #new-card').show();
            $('#q1-cards #new-card-highlight').hide();
            $('#q1-cards #review-card-highlight').show();
            $('#q1-cards #review-card').hide();
            $('#q1-long-arrow').show().delay(500).fadeOut();
        }
    );
    $('#new-card-good').on(
        'click',
        function() {
            $('#q1-cards #new-card').show();
            $('#q1-cards #new-card-highlight').hide();
            $('#q1-cards #review-card-highlight').show();
            $('#q1-cards #review-card').hide();
            $('#q1-long-arrow').show().delay(500).fadeOut();
        }
    );
    $('#new-card-easy').on(
        'click',
        function() {
            $('#q1-cards #new-card').show();
            $('#q1-cards #new-card-highlight').hide();
            $('#q1-cards #review-card-highlight').show();
            $('#q1-cards #review-card').hide();
            $('#q1-super-long-arrow').show().delay(500).fadeOut();
        }
    );

// individual difficulty buttons for q2, which toggle the images of the card piles
    $('#review-card-hard').on(
        'click',
        function() {
            $('#q1-cards #review-card').show();
            $('#q1-cards #review-card-highlight').hide();
            $('#q1-cards #new-card').hide();
            $('#q1-cards #new-card-highlight').show();
            $('#q2-short-arrow').show().delay(500).fadeOut();
        }
    );
    $('#review-card-good').on(
        'click',
        function() {
            $('#q1-cards #review-card').show();
            $('#q1-cards #review-card-highlight').hide();
            $('#q1-cards #new-card').hide();
            $('#q1-cards #new-card-highlight').show();
            $('#q2-long-arrow').show().delay(500).fadeOut();
        }
    );
    $('#review-card-easy').on(
        'click',
        function() {
            $('#q1-cards #review-card').show();
            $('#q1-cards #review-card-highlight').hide();
            $('#q1-cards #new-card').hide();
            $('#q1-cards #new-card-highlight').show();
            $('#q2-long-arrow').show().delay(500).fadeOut();
        }
    );


}); 

// popup for creating a new deck

function createNewDeck()
{

    var deck=prompt("Please enter a name for the deck");

    if (deck!=null) {
        window.location = "add.html";
    }

}

// popup for deleting a deck

function removeDeck(caller)
{

    var x=confirm("Are you sure you want to delete this deck?");

    // if (r==true) {
    //     caller.style.display="none";
    // }

}

// popups for editing deck names

function editDeckNameJapanese100()
{
    var x=prompt("Rename Deck", "Japanese 100")
}

function editDeckNameJp100Ch1()
{
    var x=prompt("Rename Deck", "Japanese 100 Ch. 1")
}

function editDeckNameJp100Ch2()
{
    var x=prompt("Rename Deck", "Japanese 100 Ch. 2")
}

function editDeckNameJp100Ch3()
{
    var x=prompt("Rename Deck", "Japanese 100 Ch. 3")
}

function editDeckNameSimilar()
{
    var x=prompt("Rename Deck", "Similar-sounding words")
}

function editDeckNameHard()
{
    var x=prompt("Rename Deck", "Hard questions")
}


function goBack()
{
    window.history.back()
}



$(document).ready(function(){

    $('#edit-success').hide();
    $('#edit-success-btn').on(
        'click',
        function() {
            $('#edit-success').show();
                window.setTimeout(function () {
        location.href = "review1.html";
    }, 500)
        }
    );



});