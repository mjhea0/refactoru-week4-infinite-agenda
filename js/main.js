$(document).ready(function (){


	// //Week and Date Rendering
	// var count = 0
	// var dateCounter = function() {
	// 	var currentDate = new Date
	// 	var newDate = new Date(currentDate);
	// 	newDate.setDate(newDate.getDate() + count);
	// 	var nd = new Date(newDate);
	// 	count++
	// 	calendarDay = nd.toString()
	// 	counsle.log(calendarDay)
	// 	return calendarDay.slice(3,15);
	// };


	//Rendering Initial Week
	var initialWeek = function (){
		var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		
		var calList = $('<ul class="calendarWeek"></ul>')
		
		for(var i=(new Date().getDay()); i<weekDays.length; i++) {
			var week = createDay(weekDays[i]);
			var item = $('<li></li>');
			item.append(week);
			calList.append(item);
		}

		$('.calendarList').append(calList);

	};

	//Rendering one week at a time
	var renderWeek = function (){
		var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		
		var calList = $('<ul class="calendarWeek"></ul>')
		
		for(var i=0; i<weekDays.length; i++) {
			var week = createDay(weekDays[i]);
			var item = $('<li></li>');
			item.append(week);
			calList.append(item);
		}

		$('.calendarList').append(calList);
		console.log('renderWeek')

	};



	var createDay = function(weekdays) {
			var dayOfWeek = $('<div class="dayOfWeek"><h3 class="dayHead text-muted">{0}</h3></div>'.supplant([weekdays]));
			var date = $('<div class="date row"><h4 class="text-info">'+ dateCounter() +'</h4></div><div class="addAppt"><button type="button" class="btn btn-success addApptButton">+</button><span class="apptAddText">Click to add another appointment</span></div><hr>');
			var appt = $('<div class="apptContainer"><a href="#"  data-placement="right" class="editable editable-click editable open appt small text-muted">Click to enter appointment</a><div class="delAppt"><button type="button" class="btn btn-xs btn-danger delAppt">&times</button><span class="apptDelText">Click to delete this appointment</span></div></div>');
			$('.appt').editable({
			    type: 'text',
			    pk: 1,
			    url: '#',
			    title: 'Add Appointment'
			});

			
			dayOfWeek.append(date);
			dayOfWeek.append(appt);

			return dayOfWeek;
		};

	// Infinite Scroll
	var scrollTop = 0;
	var docHeight; 
	var winHeight; 
	var winViewPercent; 
	var scrollPercent; 

	$(window).scroll(function(){
		 scrollTop = $(window).scrollTop();
		 docHeight = $(document).height();
		 winHeight = $(window).height();
		 winViewPercent = (1-(docHeight-winHeight)/docHeight)
		 scrollPercent = ((scrollTop) / (docHeight - winHeight) * 100);

			if(scrollPercent>=95){
				renderWeek()
			}
		
	});


	// run
	initialWeek();
	renderWeek();
	renderWeek();

	$(document).on('click', '.addAppt', function (){
		$(this).parent().append($('<div class="apptContainer"><a href="#"  data-placement="right" class="editable editable-click editable open appt small text-muted">Click to enter appointment</a><div class="delAppt"><button type="button" class="btn btn-xs btn-danger delAppt">&times</button><span class="apptDelText">Click to delete this appointment</span></div></div>'));

				$('.appt').editable({
			    type: 'text',
			    pk: 1,
			    url: '#',
			    title: 'Add Appointment'
			});
		
	});


	// add appointment button
	$(document).on('mouseover', '.addAppt', function (){
		$(this).children('.apptAddText').fadeIn()
	});

	$(document).on('mouseleave', '.addAppt', function (){
		$(this).children('.apptAddText').fadeOut()
	});

	// delete button functionality
	$(document).on('click', '.delAppt', function (){
		$(this).siblings('a').andSelf().fadeOut()

	});

	$(document).on('mouseover', '.delAppt', function (){
		$(this).children('.apptDelText').fadeIn()
	});

	$(document).on('mouseleave', '.delAppt', function (){
		$(this).children('.apptDelText').fadeOut()
	});

	// helper

	if (!String.prototype.supplant) {
	  String.prototype.supplant = function (o) {
	    return this.replace(
	      /\{([^{}]*)\}/g,
	      function (a, b) {
	        var r = o[b];
	        return typeof r === 'string' || typeof r === 'number' ? r : a;
	      }
	    );
	  };




});