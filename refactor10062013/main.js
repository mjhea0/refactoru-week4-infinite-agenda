$(document).ready(function(){

	// Globals
	var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var weekday = 0;


	// edit in place
	function editApt() {
    var divHtml = $(this).html();
    var editableText = $("<textarea class='col-md-8'>");
    editableText.val(divHtml);
    $(this).replaceWith(editableText);
    editableText.focus();
    editableText.blur(saveApt);
	}

	function saveApt() {
    var html = $(this).val();
    var viewableText = $("<div class='col-md-8 appointment'>");
    viewableText.html(html);
    $(this).replaceWith(viewableText);
    viewableText.click(editApt);
	}
	
  $(".appointment").click(editApt);

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
				'<td><div class="col-md-8 appointment">Click to enter an appointment</div></td>'
			)

			$('.table').append(newDay);

			$(".appointment").click(editApt);

			}
	}

	});
		

});