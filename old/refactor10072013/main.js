$(document).ready(function(){

	// Globals
	var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var weekday = 0;
	var count = 8;

	function createDay() {
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
		for(var i=0; i < weekArray.length; i++) {
			var week = createDay(weekArray[i]);
			var item = $('<li></li>');
			item.append(week);
			listAgenda.append(item);
		}
		$('.agenda').append(listAgenda);
	};

	//** edit in place */
	function editApt() {
    var divHtml = $(this).html();
    var editableText = $("<textarea class='col-md-8 edit'>");
    editableText.val(divHtml);
    $(this).replaceWith(editableText);
    editableText.focus();
    editableText.blur(saveApt);
	}

	function saveApt() {
    var html = $(this).val();
    var viewableText = $("<div class='col-md-8 appointment edit'>");
    viewableText.html(html);
    $(this).replaceWith(viewableText);
    viewableText.click(editApt);
	}
	
  $(".appointment").click(editApt);

  //** infinite scroll */
  function infiniteScroll() {
	$(window).scroll(function() { 
		if  ($(window).scrollTop()+250 >= ($(document).height() - ($(window).height()))){

			for (i=0; i<weekDays.length; i++) {
			var incrementDay = weekDays[i];

			var newDay = (
				'</tr>' +
				'</thead>' +
				'<tbody>' +
				'<tr>' +
				'<td><div class="col-md-4">' + incrementDay + '</div></td>' +
				'<td><div class="col-md-4">' + count + '</div></td>' +
				'<td><div class="col-md-8 appointment">Click to enter an appointment</div></td></tr>'
			)
			count++
			$('.table').append(newDay);

			$(".appointment").click(editApt);

			}
	}

	});
	}

	//** run */
	firstWeek(weekDays);
	allWeeks(weekDays);
	infiniteScroll()	

});