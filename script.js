// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // variables for current day, and hour when the user opens the page
  var currentDay = dayjs().format("MMM-DD-YYYY h:m:s");
  var currentHour = dayjs().hour();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // variable that selects all elements with class "time-block"
  var timeBlocks = $(".time-block");

  // iterate from 9 to 17 (all the time blocks) and compare its id with current time
  for(var i = 0; i < timeBlocks.length; i++){
    // varible for current time block that's being compared everytime loop iterates
    var selectedHour = i+9
    var currentBlock = timeBlocks.parent().children("#hour-"+ selectedHour);

    // if the selected time is past
    if(selectedHour < currentHour){
      // sets the class to past
      currentBlock.addClass("past")
    } 
    // if it's present
    else if(selectedHour === currentHour){
      currentBlock.addClass("present");
    }
    // if it's future
    else {
      currentBlock.addClass("future");
    }

  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  $('#currentDay').text(currentDay);
});
