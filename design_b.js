var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var weekDay = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat');

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
				id: 'assignments',
				title: 'A1',
            	start: '2014-01-05',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
			},
			{
				id: 'assignments',
				title: 'A2',
            	start: '2014-01-19',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
			},
			{
				id:'midterms',
				title: 'M1',
				start: '2014-01-20',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF'
			}
		],

		eventClick: function(calEvent, jsEvent, view) {
			if (calEvent.id == 'midterms') {
				$('#myTab a[href="#midterms"]').tab('show');

			}
		$('html, body').animate({
        	scrollTop: $('#'+calEvent.title).offset().top
   		}, 500);
		}
	})
	$('#calendar-feb').fullCalendar({
		year: 2014,
		month: 1,
		header: {
			left: 'title',
			right: ''
		},
		events: [
			{
				title: 'A3',
            	start: '2014-02-02',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
			},
			{
				title: 'A4',
            	start: '2014-02-16',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
			}
		],
	})
	$('#calendar-mar').fullCalendar({
		year: 2014,
		month: 2,
		header: {
			left: 'title',
			right: ''
		},
		events: [
			{
				title: 'A5',
            	start: '2014-03-02',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
			},
			{
				title: 'A6',
            	start: '2014-03-16',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
			},
			{
				title: 'A7',
            	start: '2014-03-30',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
			}
		],
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
		$('.calendar-container').animate({scrollLeft: '-=580'});
		console.log('you clicked the left one');
	});
	$('#slider-right').click(function() {
		$('.calendar-container').animate({scrollLeft: '+=580'});
	})
})

