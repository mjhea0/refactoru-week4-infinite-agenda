$(document).ready(function(){

	// Globals
	var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var weekday = 0;
	var count = 1
	

	//incomplete
	function newDate() {
		var day = ""
		var future = new Date(2020,0,1);
		var daysOfYear = [];
		for (var d = new Date(Date.now()); d <= future; d.setDate(d.getDate() + 1)) {
	     daysOfYear.push(new Date(d))
	  return daysOfYear
		}
	}

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
	    console.log(viewableText)
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
				'<td><div class="col-md-4">' + incrementDay +'</div></td>' +
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
infiniteScroll()
});