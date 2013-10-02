//Iterate through the object:
for i in calendar: 
	find date 
		date.each:
		find all associated appointments



loop through dateList, once i = key in calendar object:
	grab appointments and display on page under date.


//add to row.
function to add given appts to page (from object, to page)

//Generate an inline form to take appt input:
$(button).on("click", function() {
	use modal/popup/lightbox to take input
	call function to take input for new appt
})


Function to take input for new appt:
on click OR on enter, use helper function to add data to calendar object 

//Function to clear form
function clearFrom {
	clear submission form
}

//function to hide/remove modal
function {
	removes/hides modal
}

calendarHelper = function() {
	add input to calendar object

}

//Function to generate html:
function header() {
	create the table wth the "APPT" header
}

//Function to add dates to table
function addDates() {
	add each date to new row
	add a blank row after each row date for the appts
}

//Funtion to add appts
function addAppts() {
	add all apts to <ul></ul> list in the row between each date
	pass in variables from the object
	.append() to the list
}



// ---- part 3 ----- //

function editAppt() {
	event handler for adding a modal
}

function prefillAppt() {
	prefill appt form on modal
}

function saveAppt () {
	after user clicks out, save to calendar object
	call function for adding data to object
	addAppts()
}


// ---- part 4 ----- //


call function for adding dates and appts for one week

function infiniteScroll {
	something here
}

}