
$(function () {
  // variables for current day, and hour when the user opens the page
  var currentDay = dayjs().format("MMM-DD-YYYY h:m:s");
  var currentHour = dayjs().hour();
  
  // variable that selects all elements with class "time-block"
  var timeBlocks = $(".time-block");

  // adding event listener for all save buttons
  timeBlocks.children(".saveBtn").on("click", function(){
    // user input is siblings of that clicked element with class name "description"
    var userInput = $(this).siblings(".description").val();

    // save the value to local storage with key value same as id
    localStorage.setItem($(this).parent().attr("id"), userInput);
  })
  
  // iterate through all the time blocks and compare its id with current time
  for(var i = 0; i < timeBlocks.length; i++){
    // variable for current time block that's being compared every time loop iterates
    var selectedHour = i+9

    // if the selected time is past
    if(selectedHour < currentHour){
      // sets the class to past
      timeBlocks.eq(i).addClass("past")
    } 
    // if it's present
    else if(selectedHour === currentHour){
      timeBlocks.eq(i).addClass("present");
    }
    // if it's future
    else {
      timeBlocks.eq(i).addClass("future");
    }

  }

  

  // iterate from 9 to 17 to apply changes for all time blocks
  for(var i = 9; i < 18; i++){
    var currentTextArea = timeBlocks.eq(i-9).children(".description");
    // if hour-i key has some value stored in local storage
    if(localStorage.getItem("hour-"+i)){
      // then sets the value of that box to saved data
      currentTextArea.val(localStorage.getItem("hour-"+i));
    }
    // if it doesn't exist, it doesn't do anything
  }

  $('#currentDay').text(currentDay);
});
