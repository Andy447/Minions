var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var weekDay = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat');

$(document).ready(function() {
	var slider = $('.calendarSlider').bxSlider({
		slideWidth: 400,
		minSlides: 2,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 10,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '',
		prevText: '',
	});

	$('#slider-next').click(function() {
  		slider.goToNextSlide();
 	});
	$('#slider-prev').click(function() {
  		slider.goToPrevSlide();
  	})
});

$(document).ready(function() {
	$('#calendar-jan').fullCalendar({
		year: 2014,
		month: 0,
		header: {
			left: 'title',
			right: ''
		},
		events: [
			{
            start: '2014-01-10',
            backgroundColor: '#5254FF',
            borderColor: '#5254FF'
			},
			{
            start  : '2014-01-10',
            backgroundColor: '#FA8A28',
            borderColor: '#FA8A28'
			}
		],

		eventClick: function(calEvent, jsEvent, view) {
			alert ('Event');
		}
	})
	$('#calendar-feb').fullCalendar({
		year: 2014,
		month: 1,
		header: {
			left: 'title',
			right: ''
		}
	})
	$('#calendar-mar').fullCalendar({
		year: 2014,
		month: 2,
		header: {
			left: 'title',
			right: ''
		}
	})
	$('#calendar-apr').fullCalendar({
		year: 2014,
		month: 3,
		header: {
			left: 'title',
			right: ''
		}
	})
})

$(document).ready(function() {
	$('#slider-left').click(function() {
		$('.calendar-container').animate({scrollLeft: '-=570'});
		console.log('you clicked the left one');
	});
	$('#slider-right').click(function() {
		$('.calendar-container').animate({scrollLeft: '+=570'});
	})
})


