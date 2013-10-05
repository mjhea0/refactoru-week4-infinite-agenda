Infinite scroll function:



	var calendarUnorderedList = []

	function calculateNewDate(date) {
		var newDate = date.setDate(date.getDate() + 1)
		return newDate
	}


function renderWeek() {
	var calendarUnorderedList = $('<ul></ul>')
	for(var i=0; i < 7; i++) {
		var weekday = calculateNewDate(new Date())
		var singleDate = $('<li></li>')
		calendarUnorderedList.append(singleDate.append(weekday))
	}

	$('.calendarList').append(calendarUnorderedList)

}

var scrollTop = 0;
var docHeight
var winHeight 
var winViewPercent 
var scrollPercent 

$(window).scroll(function(){
	 scrollTop = $(window).scrollTop()
	 docHeight = $(document).height()
	 winHeight = $(window).height()
	 winViewPercent = (1-(docHeight-winHeight)/docHeight)
	 scrollPercent = ((scrollTop) / (docHeight - winHeight) * 100)

		if(scrollPercent>95){
			renderWeek()
		}

});

renderWeek()
