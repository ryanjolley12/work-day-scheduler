var date = moment();
console.log(date);

document.getElementById("currentDay").textContent = date; 

var currentTime = moment().format('h:mm');
console.log(currentTime);


// WHEN USER CLICKS SAVE, THE TEXT VALUE IS OBTAINED
$(".saveBtn").on("click", function () {
    // OBTAIN TEXT VALUES FROM ROW CLASS AND ID 
    var textValue = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // SET TO SAVE IN LOCALSTORAGE
    localStorage.setItem(time, textValue);
});

//MAKE READABLE TIME VARIABLES BUT KEEP NECCESSARY NUMERIC VALUE
var eight = 8;
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
$("#row8 .description").val(localStorage.getItem("row8"));

$("#row9 .description").val(localStorage.getItem("row9"));

$("#row10 .description").val(localStorage.getItem("row10"));

$("#row5 .description").val(localStorage.getItem("row5"));

//IF/THEN STATEMENTS: EX. IF currentTime > 9am, label as past; if currentTime < 9am, label as future; if currentTime = 9am, label as now 


if (currentHour < nine) {
    $("#text9").addClass("future");
} else if (currentHour > nine) {
    $("#text9").addClass("past");
} else if (currentHour = nine) {
    $("#text9").addClass("present");
}

if (currentHour < five) {
    $("#text5").addClass("future");
} else if (currentHour > nine) {
    $("#text5").addClass("past");
} else if (currentHour = nine) {
    $("#text5").addClass("present");
}

























