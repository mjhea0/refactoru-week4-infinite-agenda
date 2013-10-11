
//** globals */
var MONTHS = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var MONTH_CLASS = ["month", "other-month"]
var ONE_DAY= 86400000;
var ONE_WEEK = ONE_DAY * 7;
var WEEK_OFFSET = -3; // render X amount of weeks before current date


function calculateDay(someDate, offsetInDays) {
  var offset = offsetInDays * ONE_DAY;
  return new Date(someDate.getTime() + offset);
}

function renderFutureWeek(numWeeksAhead) {
  var now = new Date();
  var someWeeksFromNow = new Date(now.getTime() + (ONE_WEEK * numWeeksAhead));
  return renderWeekAround(someWeeksFromNow);
}

function renderWeekAround(someDate) {
  var currentMonth = someDate.getMonth();
  var currentDayOfWeek = someDate.getDay();
  var currentDate = someDate.getDate();
  var week = [];
  for(var i = 0; i < 7; i++) {
    var difference = i - currentDayOfWeek;
    var anotherDay = calculateDay(someDate, difference);
    week[i] = anotherDay; 
  }
  return generateWeekAsHtmlRow(week);
}

function generateWeekAsHtmlRow(weekArray){
  var html = "<tr>";
  for(var i = 0; i < 7; i++) {
    var date = weekArray[i];
    var css_class = determineStyle(date)
    html += "<td class=\"" + css_class + "\">";
    html += dateFormatter(date);
    html += "</td>";
  }
  return html;
}

function determineStyle(aDate) {
  var someMonth = aDate.getMonth();
  var someDayOfWeek = aDate.getDay();
  var someDate = aDate.getDate();

  var now = new Date();
  
  if(someMonth == now.getMonth() && someDayOfWeek == now.getDay() && someDate == now.getDate()) {
    return "today";
  }

  return MONTH_CLASS[aDate.getMonth() % 2];
}

function dateFormatter(date) {
  var formattedDate = "";
  
  if(date.getDate() == 1) {
    formattedDate += MONTHS[date.getMonth()] + " ";
  }
  
  formattedDate += date.getDate();

  if(date.getDate() == 1 && date.getMonth() == 0) {
    formattedDate += ", ";
    formattedDate += date.getFullYear();
  }

  return formattedDate;
}

function fullDate(date) {
  var formatted = MONTHS[date.getMonth()] + ", " + date.getFullYear();
  return formatted;
}

function renderMoreWeeks(numWeeks) {
  for(var i = 0; i < numWeeks; i++) {
    $("#calendar").append(renderFutureWeek(WEEK_OFFSET));
    WEEK_OFFSET++;
  }
}

$(function() {
  //** begin after dom is loaded */
  renderMoreWeeks(10); // render 10 weeks to start
});

$(window).scroll(function() {
  if($(document).height() - 60 < $(document).scrollTop() + $(window).height()) {
    renderMoreWeeks(10); // render 10 more times
  }
});	