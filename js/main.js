$(document).ready(function (){

	//** globals */
	var weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	var count = 0
	

	//** Calculate week day */
	function weekDay() {
		var currentDate = new Date
		var newDate = new Date(currentDate)
		newDate.setDate(newDate.getDate() + count)
		var dayOfWeek = new Date(newDate)
		count++
		calendarDay = dayOfWeek.toString()
		return calendarDay.slice(3,15)
	};

	//* Calculate the first week */
	function firstWeek (weekArray) {
		var listAgenda = $('<ul class="week"></ul>')
		for(var i=(new Date().getDay()); i < 7; i++) {
			var item = $('<li></li>');
			listAgenda.append(item);
		}
		$('.agenda').append(listAgenda);
	};

	//** Generate weeks */
	function allWeeks(weekArray){
	var listAgenda = $('<ul class="week"></ul>')
		for(var i=0; i < weeks.length; i++) {
			var week = createDay(weeks[i]);
			var item = $('<li></li>');
			item.append(week);
			listAgenda.append(item);
		}
		$('.agenda').append(listAgenda);
	};

	//** Append to HTML */
	function createDay(weeks) {
		var dayOfWeek = $(
			'<div class="dayOfWeek">' +
				'<h4 class="dayHead">' + weeks + ", " + weekDay() + '</h4>' +
				'<div class="addAppt">' +
					'<button type="button" class="btn btn-primary btn-xs addApptButton">Add</button>' + " " +
					'<span>A new freaking appointment</span>' +
				'</div>' +
				'</h4>' +
			'</div>' +
				'<br>' +
			'</div>')
		return dayOfWeek;
	};

	//** x editable */
	$(document).on('click', '.addAppt', function (){
		$(this).parent().append($(
			'<div class="delAppt">' +
				'<h6><button type="button" class="btn btn-xs btn-danger">Delete</button>' + " " +
				'<a href="#" class="editable editable-click appt">Click to enter appointment</a></h6>' +
			'</div>'));

		 //editable popup
		$.fn.editable.defaults.mode = 'popup'; 
		$('.appt').editable()
		
	});

	// delete 
	$(document).on('click', '.delAppt', function (){
		$(this).unbind('a').andSelf()
	});


	//** Infinite Scroll */
	function infiniteScroll() {
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
					allWeeks()
				}
		});
	}


	//** run */
	firstWeek(weeks);
	allWeeks(weeks);
	infiniteScroll()


});