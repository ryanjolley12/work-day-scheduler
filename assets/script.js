var date = moment();

document.getElementById("currentDay").textContent = date; 
// give each row a # id 
// if the hour is more than the current time, box is already past 




// find out what the hour value is at the specific time we click 
// set the row as an hour class 
// use this.attr to take the value of that number and figure out what the time should be for that block 

// local storage -- okay to repeat each way for retreiving from local storage 


// if current time > 9 label as past; if currentTime < 9 label as futre ; if = present 



var currentTime = moment().format('h:mm');
console.log(currentTime);







var currentDay = document.createElement("p");
// currentDay = moment().format("YYYY-MM-DD");
currentDay.innerHTML = moment().format("MMM DD, YYYY - hh:mm a");
timeNow.appendChild(currentDay) // Append to <p> with id of timeNow in the HTML doc
console.log(moment()); //console log because it's a good practice to do so

// WHEN USER CLICKS SAVE, THE TEXT VALUE IS OBTAINED
$(".saveBtn").on("click", function () {
    // OBTAIN TEXT VALUES FROM ROW CLASS AND ID 
    var textValue = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // SET TO SAVE IN LOCALSTORAGE
    localStorage.setItem(time, textValue);
});

//MAKE READABLE TIME VARIABLES BUT KEEP NECCESSARY NUMERIC VALUE
var nine = 9;
var ten = 10;
var eleven = 11;
var twelve = 12;
var one = 13;
var two = 14;
var three = 15;
var four = 16;
var five = 17;

// OBTAIN DATA FROM LOCALSTORAGE FOR EACH ROW USING ID AND CLASS NAME
$("#row8 .description").val(localStorage.getItem("row9"));

$("#row9 .description").val(localStorage.getItem("row9"));

$("#row10 .description").val(localStorage.getItem("row10"));





























