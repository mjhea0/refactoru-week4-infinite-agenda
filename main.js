$(document).ready(function(){

	//Objects:
	var calendar {
		"09/01/2013": ["appointment1","appointment2"],
		"09/02/2013": ["appointment1", "appointment2"],
	};

	var dateList ["09/01/2013", "09/02/2013"]

	//iterate through array
	function dateIterate(array) {
		for (var i = 0; array.length; i++) {
			var newDate = array[i]
			addDates(newDate)
		};
	}

	//// STOP

	//Function to add dates to table
	$('input#author').focus();
		function addDates(array) {


			add each date to new row
			add a blank row after each row date for the appts
		}


	$('input#author').focus();
		function addRow(quote, author){
			/** append author and create link to author page */
			var newAuthor = "<td><a href='author.html?" + author + "'>" + author + "</a></td>";
			/** append the quote and create  */
			var newQuote = "<td>" + quote + "</div</td> <td><center><div class='box' author='" + author + 
			"' quote='" + quote + "'></center></td>";
			/** use the variables to append */
			$("table#my_list tbody").append("<tr>"+ newAuthor + newQuote + "</tr>")
		}




// Run

dateIterate(dateList)



