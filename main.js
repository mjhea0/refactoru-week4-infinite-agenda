$(function(){

	$.jStorage.set("09/01/2013", ["app2", "app2"])
	$.jStorage.set("09/02/2013", ["app3", "app3"])

	var dateArray = ["09/01/2013", "09/02/2013"]


	//•• iterate through date array •/
	function dateIterate(array) {
		for (var i = 0; i < array.length; i++) {
			//newDate = element in date array
			addDates(array[i]);
			console.log(array[i])
		};
	};

	dateIterate(dateArray)

//define function addDates that was called in function dateIterate:
	function addDates(date) {
		//append date and associated appointments to page
		$("#dates").append("<tr>" +
			//create new row for current date...
			"<td class='firstTD'><button type='button' class='btn btn-primary btn-xs'>Add Appointment</button>" +
			"</td><td class='currentDate'>" + date + "</td></tr>"
	)}

//Generate an inline form to take appt input:
function buttonClick() {
	//event handler for "Add Appointment" button
	$(document).on("click", ".btn-xs", function() {
		//refer to current date by traversing up to the parent and then finding .currentDate class
		var apptDate = $(this).parents('tr').find('.currentDate').text()
		//pass apptDate argument into date parameter of addAppt	function in order to initiate key press event handler that takes the value of input and passes the following into the (appt) section of the object to correspond with the current [date] key.
		// addAppt(apptDate);	
		//create modal to temporarily replace button to take input
		$(this).replaceWith("<div class='input-group hideButton'>" +
  		"<span class='input-group-addon'>Appointment:</span>" +
  		"<input type='text' class='form-control'" +
  		"placeholder='Appointment goes here.'></div>")
	});
};

// function addAppt(date) {
// 	$(document).keypress(function(event) {
// 		if(event.which === 13) {
// 	//Create modal to take input//grab input from .form-control:
// 			//Create input variable, i.e. the value of the user input
// 			var input = $(".form-control").val()
// 			//Insert date, .....
// 			insertToCalendar(date,input, calendar)
// 			removeInput();
// 		}
// 	})
// }

// function removeInput() {
// 	$(".hideButton").replaceWith("<button type='button' class='btn btn-primary btn-xs'>Add Appointment</button>")
// }

// function reloadPage() {
// 	location.load(".btn-xs");
// }

// function insertToCalendar(date, appt, calendar) {
// 	calendar[date].push(appt);
// 	$('#dates').empty()
// 	dateIterate(dateList, calendar)
	
// 	// take input from ".form-control" and append to calendar object to create a new key: value pair aka date:"appts"
// }


















// //call dateIterate function using date array and calendar Object
// dateIterate(dateList, calendar);
// //call function to take input for new appt
// buttonClick();

});


