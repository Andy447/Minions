var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var weekDay = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat');

/*conflict helper*/
$(document).ready(function() {
	$('#conflict-info').popover('hide');
})

/*initiating the calendar widgets*/
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
				id: 'A1',
				tag: 'assignments',
				title: 'A1',
            	start: '2014-01-05',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28',
            	url: '#test'
			},
			{
				id: 'A2',
				tag: 'assignments',
				title: 'A2 - !',
            	start: '2014-01-19',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28',
            	className:'calendar-warning',
            	url: '#test'
			},
			{
				id:'M1',
				tag:'exams',
				title: 'M1 - !!!',
				start: '2014-01-20',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF',
				className:'calendar-warning',
				url: '#test'
			}
		],

		eventClick: function(calEvent, jsEvent, view) {
			if (calEvent.tag == 'exams') {
				$('#myTab a[href="#exams"]').tab('show');
			}
			if (calEvent.tag == 'assignments') {
				$('#myTab a[href="#assignments"]').tab('show');
			}
		
		$('html, body').animate({
        	scrollTop: $('#'+calEvent.id).offset().top
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
				id: 'A3',
				tag: 'assignments',
				title: 'A3 - !',
            	start: '2014-02-02',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28',
            	className:'calendar-warning',
            	url: '#test'
			},
			{
				id: 'A4',
				tag: 'assignments',
				title: 'A4 - !',
            	start: '2014-02-16',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28',
            	className:'calendar-warning',
            	url: '#test'
			},
			{
				id:'M2',
				tag:'exams',
				title: 'M2 - !!!',
				start: '2014-02-07',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF',
				className:'calendar-warning',
				url: '#test'
			},
			{
				id:'M3',
				tag:'exams',
				title: 'M3 - !!!',
				start: '2014-02-17',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF',
				className:'calendar-warning',
				url: '#test'
			}
		],

		eventClick: function(calEvent, jsEvent, view) {
			if (calEvent.tag == 'exams') {
				$('#myTab a[href="#exams"]').tab('show');
			}
			if (calEvent.tag == 'assignments') {
				$('#myTab a[href="#assignments"]').tab('show');
			}
		
		$('html, body').animate({
        	scrollTop: $('#'+calEvent.id).offset().top
   		}, 500);
		}
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
				id: 'A5',
				tag: 'assignments',
				title: 'A5',
            	start: '2014-03-02',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28',
            	url: '#test'
			},
			{
				id: 'A6',
				tag: 'assignments',
				title: 'A6',
            	start: '2014-03-16',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28',
            	url: '#test'
			},
			{
				id: 'A7',
				tag: 'assignments',
				title: 'A7',
            	start: '2014-03-30',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28',
            	url: '#test'
			},
			{
				id:'M4',
				tag:'exams',
				title: 'M4 - !!!',
				start: '2014-03-05',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF',
				className:'calendar-warning',
				url: '#test'
			}
		],
		eventClick: function(calEvent, jsEvent, view) {
			if (calEvent.tag == 'exams') {
				$('#myTab a[href="#exams"]').tab('show');
			}
			if (calEvent.tag == 'assignments') {
				$('#myTab a[href="#assignments"]').tab('show');
			}
		
		$('html, body').animate({
        	scrollTop: $('#'+calEvent.id).offset().top
   		}, 500);
		}
	})
	$('#calendar-apr').fullCalendar({
		year: 2014,
		month: 3,
		header: {
			left: 'title',
			right: ''
		}, 
		eventClick: function(calEvent, jsEvent, view) {
			if (calEvent.tag == 'exams') {
				$('#myTab a[href="#exams"]').tab('show');
			}
			if (calEvent.tag == 'assignments') {
				$('#myTab a[href="#assignments"]').tab('show');
			}
		
		$('html, body').animate({
        	scrollTop: $('#'+calEvent.id).offset().top
   		}, 500);
		}
	})
})

$(document).ready(function() {
	$('#slider-left').click(function() {
		$('.calendar-container').animate({scrollLeft: '-=580'});
	});
	$('#slider-right').click(function() {
		$('.calendar-container').animate({scrollLeft: '+=580'});
	})
})

/*pie chart initializations*/

$(document).ready(function() {
	$.elycharts.templates['pie_basic_1'] = {
	 type : "pie",
	 defaultSeries : {
	  plotProps : {
	   stroke : "white",
	   "stroke-width" : 2,
	   opacity : 0.9
	  },
	  highlight : {
	   move : 10
	  },
	  tooltip : {
	   frameProps : {
	    opacity : 0.5
	   }
	  },
	  startAnimation : {
	   active : true,
	   type : "grow"
	  }
	 },
	 features : {
	  legend : {
	   horizontal : false,
	   width : 40,
	   height : 80,
	   x : 252,
	   y : 218,
	   borderProps : {
	    "fill-opacity" : 0.3
	   }
	  }
	 }
	}
	$(".generic_pie_1").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [40,60]
	 },
	 tooltips : {
	  serie1 : ["40% busy", "60% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$(".generic_pie_2").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [80,20]
	 },
	 tooltips : {
	  serie1 : ["80% busy", "20% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$(".generic_pie_3").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [30,70]
	 },
	 tooltips : {
	  serie1 : ["30% busy", "70% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$(".generic_pie_4").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [10,90]
	 },
	 tooltips : {
	  serie1 : ["10% busy", "90% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#jan17chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [61, 39]
	 },
	 tooltips : {
	  serie1 : ["61% busy", "39% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#jan18chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [0,100]
	 },
	 tooltips : {
	  serie1 : ["0% busy", "100% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#jan19chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [0, 100]
	 },
	 tooltips : {
	  serie1 : ["0% busy", "100% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#jan20chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [40,60]
	 },
	 tooltips : {
	  serie1 : ["40% busy", "60% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#jan21chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [55,45]
	 },
	 tooltips : {
	  serie1 : ["55% busy", "45% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#jan22chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [0,100]
	 },
	 tooltips : {
	  serie1 : ["0 busy", "100% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#jan23chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [45, 55]
	 },
	 tooltips : {
	  serie1 : ["45% busy", "55% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb3chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [72, 28]
	 },
	 tooltips : {
	  serie1 : ["72% busy", "28% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb4chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [58, 42]
	 },
	 tooltips : {
	  serie1 : ["58% busy", "42% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb5chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [4, 96]
	 },
	 tooltips : {
	  serie1 : ["4% busy", "96% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb6chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [45, 55]
	 },
	 tooltips : {
	  serie1 : ["45% busy", "55% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb7chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [66, 34]
	 },
	 tooltips : {
	  serie1 : ["66% busy", "34% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb8chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [0, 100]
	 },
	 tooltips : {
	  serie1 : ["0% busy", "100% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb9chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [0, 100]
	 },
	 tooltips : {
	  serie1 : ["0% busy", "100% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb16chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [0, 100]
	 },
	 tooltips : {
	  serie1 : ["0% busy", "100% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb17chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [50, 50]
	 },
	 tooltips : {
	  serie1 : ["50% busy", "50% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb18chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [5, 95]
	 },
	 tooltips : {
	  serie1 : ["5% busy", "95% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb19chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [66, 34]
	 },
	 tooltips : {
	  serie1 : ["66% busy", "34% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb20chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [35, 65]
	 },
	 tooltips : {
	  serie1 : ["35% busy", "65% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb21chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [80, 55]
	 },
	 tooltips : {
	  serie1 : ["80% busy", "55% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#feb22chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [0, 100]
	 },
	 tooltips : {
	  serie1 : ["0% busy", "100% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#mar3chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [38, 62]
	 },
	 tooltips : {
	  serie1 : ["38% busy", "62% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#mar4chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [50, 50]
	 },
	 tooltips : {
	  serie1 : ["50% busy", "50% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#mar5chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [80, 20]
	 },
	 tooltips : {
	  serie1 : ["80% busy", "20% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#mar6chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [6, 94]
	 },
	 tooltips : {
	  serie1 : ["6% busy", "94% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#mar7chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [90, 10]
	 },
	 tooltips : {
	  serie1 : ["90% busy", "10% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#mar8chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [0, 100]
	 },
	 tooltips : {
	  serie1 : ["0% busy", "100% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});
	$("#mar9chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [0, 100]
	 },
	 tooltips : {
	  serie1 : ["0% busy", "100% free"]
	 },
	 defaultSeries : {
	  values : [{
	   plotProps : {
	    fill : "#FF1212"
	   }
	  }, {
	   plotProps : {
	    fill : "#335CFF"
	   }
	  }]
	 }
	});

})

/*successfully changing the midterm dates*/
$(document).ready(function() {
	$('.newM1Date').click(function() {
		$('#M1-date').empty().append('11:00AM - Wednesday, January 22nd, 2014');
		$('#M1-conflict').empty().append('0%');
		$('.alert-modal-body').empty().append('Midterm 1 date successfully changed to 11:00AM - January 22nd, 2014');
		$('#calendar-jan').fullCalendar('removeEvents', 'M1');
		var changedEvent = {
				id:'M1',
				tag:'midterms',
				title: 'M1',
				start: '2014-01-22',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF',
				url: '#test'
		}
		$('#calendar-jan').fullCalendar('renderEvent', changedEvent);
		$('#alertModal').modal('toggle');
	});
	$('.newM2Date').click(function() {
		$('#M2-date').empty().append('11:00AM - Wednesday, February 5, 2014');
		$('#M2-conflict').empty().append('4%');
		$('.alert-modal-body').empty().append('Midterm 1 date successfully changed to 11:00AM - February 5, 2014');
		$('#calendar-feb').fullCalendar('removeEvents', 'M2');
		var changedEvent = {
				id:'M2',
				tag:'midterms',
				title: 'M2',
				start: '2014-02-05',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF',
				url: '#test'
		}
		$('#calendar-feb').fullCalendar('renderEvent', changedEvent);
		$('#alertModal').modal('toggle');
	});
	$('.newM3Date').click(function() {
		$('#M3-date').empty().append('11:00AM - Tuesday, February 18, 2014');
		$('#M3-conflict').empty().append('5%');
		$('.alert-modal-body').empty().append('Midterm 1 date successfully changed to 11:00AM - February 18, 2014');
		$('#calendar-feb').fullCalendar('removeEvents', 'M3');
		var changedEvent = {
				id:'M3',
				tag:'midterms',
				title: 'M3',
				start: '2014-02-18',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF',
				url: '#test'
		}
		$('#calendar-feb').fullCalendar('renderEvent', changedEvent);
		$('#alertModal').modal('toggle');
	});
	$('.newM4Date').click(function() {
		$('#M4-date').empty().append('11:00AM - Thursday, March 6, 2014');
		$('#M4-conflict').empty().append('6%');
		$('.alert-modal-body').empty().append('Midterm 1 date successfully changed to 11:00AM - March 6, 2014');
		$('#calendar-mar').fullCalendar('removeEvents', 'M4');
		var changedEvent = {
				id:'M4',
				tag:'midterms',
				title: 'M4',
				start: '2014-03-06',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF',
				url: '#test'
		}
		$('#calendar-mar').fullCalendar('renderEvent', changedEvent);
		$('#alertModal').modal('toggle');
	});
})

/*adding a new midterm*/
$(document).ready(function() {
	$('#datepicker').datepicker();
	$('#create-new-exam').click(function() {
		$('#newExamModal').modal('toggle');
	})
})

/*
$(document).ready(function() {
	//$('#M2').hide();
	$('#saveNewExam').click(function() {
		var newEvent = {
				id:'M2',
				tag:'midterms',
				title: 'M2',
				start: '2014-03-03',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF',
				url: '#test'
		}
		$('#calendar-mar').fullCalendar('renderEvent', newEvent);	
		$('#newExamModal').modal('toggle');
		$('.alert-modal-body').empty().append('Midterm 2 successfully created on March 3, 2014 at 1:00PM in DMP 101');
		$('#alertModal').modal('toggle');
		$('#M2').show();
	})
})
*/

/*changing assignment 5 date*/
$(document).ready(function() {
	$('#changeAssignmentDate').click(function() {
		$('#A5-date').empty().append('11:00AM - February 28, 2014');
		$('#A5-conflict').empty().append('2%');
		$('.alert-modal-body').empty().append('Assignment 5 due date successfully changed from 11:00AM March 2, 2014 to 11:00AM - February 28, 2014');
		$('#calendar-mar').fullCalendar('removeEvents', 'A5');
		var newEvent = {
				id:'A5',
				tag:'assignments',
				title: 'A5',
				start: '2014-02-28',
				backgroundColor: '#FA8A28',
				borderColor: '#FA8A28',
				url: '#test'
		}
		$('#calendar-feb').fullCalendar('renderEvent', newEvent);
		$('#alertModal').modal('toggle');
	})
})

$(document).ready(function() {
	$('.details').click(function() {
		$('#detailsModal').modal('toggle');
	})
})
