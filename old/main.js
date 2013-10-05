$(function(){



	var dateArray = [
		"09/01/2013", 
		"09/02/2013",
		"09/03/2013", 
		"09/04/2013",
		"09/05/2013", 
		"09/06/2013",
		"09/07/2013", 
		"09/08/2013",
		"09/09/2013", 
		"09/10/2013",
		"09/11/2013", 
		"09/12/2013",
		"09/13/2013", 
		"09/14/2013",
		"09/15/2013", 
		"09/16/2013",
		]



	//•• iterate through date array •/
	function dateIterate(array) {
		for (var i = 0; i < array.length; i++) {
			//newDate = element in date array
			var values = $.jStorage.get(array[i].toString())
			addDates(array[i], values);
		};
	};


	//define function addDates that was called in function dateIterate:
	function addDates(date, apptArray) {

		if(apptArray !== null) { 
				
			
		//append date and associated appointments to page
			$("#dates").append("<tr>" +
			//create new row for current date...
			"<td class='firstTD'><button type='button' class='btn btn-primary btn-xs'>Add Appointment</button>" +
			"</td><td class='currentDate'>" + date + "</td></tr>" +
			"<tr><td><ul class='appts'><li>" + apptArray  + "</li></ul></td><td></td></tr>"
			)	

		} else {
					$("#dates").append("<tr>" +
			//create new row for current date...
			"<td class='firstTD'><button type='button' class='btn btn-primary btn-xs'>Add Appointment</button>" +
			"</td><td class='currentDate'>" + date + "</td></tr>" 
		)}
	}

//Generate an inline form to take appt input:
function attachButtonClick() {
	//event handler for "Add Appointment" button
	$(document).on("click", ".btn-xs", function() {
		//refer to current date by traversing up to the parent and then finding .currentDate class
		var apptDate = $(this).parents('tr').find('.currentDate').text()
		//pass apptDate argument into date parameter of addAppt	function in order to initiate key press event handler that takes the value of input and passes the following into the (appt) section of the object to correspond with the current [date] key.
		addAppt(apptDate);	
		//create form for adding new appointments
		//DOM element in new function?
		$(this).replaceWith("<div class='input-group hideButton'>" +
  		"<span class='input-group-addon'>Appointment:</span>" +
  		"<input type='text' class='form-control'" +
  		"placeholder='Appointment goes here.'></div>")
	});
};

function addAppt(date) {
	$(document).keypress(function(event) {
		if(event.which === 13) {
			//Create input variable, i.e. the value of the user input
			var input = $(".form-control").val()
			//Grab current values in local storage associated with the date
			var currentValues = $.jStorage.get(date.toString())
			if (currentValues !== null) {
			//Add form input to values pulled from local storage
			currentValues.push(input)
			//update local storage with new values
			$.jStorage.set(date.toString(), currentValues)
			removeInput()
			dateIterate(dateArray)
			location.reload();
		} else {
			testArray = []
			testArray.push(input)
			$.jStorage.set(date.toString(), testArray)
			removeInput()
			dateIterate(dateArray)
			location.reload();
		}

		}
	})
}

function removeInput() {
	$(".hideButton").replaceWith("<button type='button' class='btn btn-primary btn-xs'>Add Appointment</button>")


}


function insertToCalendar(date, appt, calendar) {
	calendar[date].push(appt);
	$('#dates').empty()
	dateIterate(dateList, calendar)
}



dateIterate(dateArray)
attachButtonClick()

});








    



   




