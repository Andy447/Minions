var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
var monthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var weekDay = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat');

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
            	borderColor: '#FA8A28'
			},
			{
				id: 'A2',
				tag: 'assignments',
				title: 'A2 - !',
            	start: '2014-01-19',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
			},
			{
				id:'M1',
				tag:'exams',
				title: 'M1 - !!!',
				start: '2014-01-20',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF'
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
            	borderColor: '#FA8A28'
			},
			{
				id: 'A4',
				tag: 'assignments',
				title: 'A4 - !',
            	start: '2014-02-16',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
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
            	borderColor: '#FA8A28'
			},
			{
				id: 'A6',
				tag: 'assignments',
				title: 'A6',
            	start: '2014-03-16',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
			},
			{
				id: 'A7',
				tag: 'assignments',
				title: 'A7',
            	start: '2014-03-30',
            	backgroundColor: '#FA8A28',
            	borderColor: '#FA8A28'
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
	  serie1 : [20,80]
	 },
	 tooltips : {
	  serie1 : ["20% busy", "80% free"]
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
	$("#jan24chart").chart({
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
	$("#jan25chart").chart({
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
	$("#jan26chart").chart({
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
	$("#feb27chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [44, 56]
	 },
	 tooltips : {
	  serie1 : ["44% busy", "56% free"]
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
	$("#feb28chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [2, 98]
	 },
	 tooltips : {
	  serie1 : ["2% busy", "98% free"]
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
	$("#mar1chart").chart({
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
	$("#mar2chart").chart({
	 template : "pie_basic_1",
	 values : {
	  serie1 : [40, 60]
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
	$("#mar3chart").chart({
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
	$("#mar4chart").chart({
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
	$("#mar5chart").chart({
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

})

/*successfully changing the midterm date*/
$(document).ready(function() {
	$('.newM1date').click(function() {
		$('#M1-date').empty().append('11:00AM - January 22nd, 2014');
		$('.alert-modal-body').empty().append('Midterm 1 date successfully changed to 11:00AM - January 22nd, 2014');
		$('#calendar-jan').fullCalendar('removeEvents', 'M1');
		var changedEvent = {
				id:'M1',
				tag:'midterms',
				title: 'M1',
				start: '2014-01-22',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF'
		}
		$('#calendar-jan').fullCalendar('renderEvent', changedEvent);
		$('#alertModal').modal('toggle');
	})
})

/*adding a new midterm*/
$(document).ready(function() {
	$('#datepicker').datepicker();
	$('#create-new-exam').click(function() {
		$('#newExamModal').modal('toggle');
	})
})

$(document).ready(function() {
	$('#M2').hide();
	$('#saveNewExam').click(function() {
		var newEvent = {
				id:'M2',
				tag:'midterms',
				title: 'M2',
				start: '2014-03-03',
				backgroundColor: '#5254FF',
				borderColor: '#5254FF'
		}
		$('#calendar-mar').fullCalendar('renderEvent', newEvent);	
		$('#newExamModal').modal('toggle');
		$('.alert-modal-body').empty().append('Midterm 2 successfully created on March 3rd, 2014');
		$('#alertModal').modal('toggle');
		$('#M2').show();
	})
})

/*changing assignment 5 date*/
$(document).ready(function() {
	$('#changeAssignmentDate').click(function() {
		$('#A5-date').empty().append('11:00AM - February 28, 2014');
		$('.alert-modal-body').empty().append('Assignment 5 due date successfully changed from 11:00AM March 3rd, 2014 to 11:00AM - February 28, 2014');
		$('#calendar-mar').fullCalendar('removeEvents', 'A5');
		var newEvent = {
				id:'A5',
				tag:'assignments',
				title: 'A5',
				start: '2014-02-28',
				backgroundColor: '#FA8A28',
				borderColor: '#FA8A28'
		}
		$('#calendar-feb').fullCalendar('renderEvent', newEvent);
		$('#alertModal').modal('toggle');
	})
})
