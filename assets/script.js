// worked with Ani on code 

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
var noon = 12;
var one = 13;
var two = 14;
var three = 15;
var four = 16;
var five = 17;

// OBTAIN DATA FROM LOCALSTORAGE FOR EACH ROW USING ID AND CLASS NAME
$("#row8 .description").val(localStorage.getItem("row8"));

$("#row9 .description").val(localStorage.getItem("row9"));

$("#row10 .description").val(localStorage.getItem("row10"));

$("#row11 .description").val(localStorage.getItem("row11"));

$("#row12 .description").val(localStorage.getItem("row12"));

$("#row1 .description").val(localStorage.getItem("row1"));

$("#row2 .description").val(localStorage.getItem("row2"));

$("#row3 .description").val(localStorage.getItem("row3"));

$("#row4 .description").val(localStorage.getItem("row4"));

$("#row5 .description").val(localStorage.getItem("row5"));

//IF/THEN STATEMENTS: EX. IF currentTime > 9am, label as past; if currentTime < 9am, label as future; if currentTime = 9am, label as now 

var hour =moment().hour();
console.log(hour)

if (hour < eight) {
    console.log(eight);
    $("#text8").addClass("future");
} else if (hour > eight) {
    $("#text8").addClass("past");
} else if (hour = eight) {
    $("#text8").addClass("present");
}

if (hour < nine) {
    $("#text9").addClass("future");
} else if (hour > nine) {
    $("#text9").addClass("past");
} else if (hour = nine) {
    $("#text9").addClass("present");
}

if (hour < ten) {
    $("#text10").addClass("future");
} else if (hour > ten) {
    $("#text10").addClass("past");
} else if (hour = ten) {
    $("#text10").addClass("present");
}

if (hour < eleven) {
    $("#text11").addClass("future");
} else if (hour > eleven) {
    $("#text11").addClass("past");
} else if (hour = eleven) {
    $("#text11").addClass("present");
}

if (hour < noon) {
    $("#text12").addClass("future");
} else if (hour > noon) {
    $("#text12").addClass("past");
} else if (hour = noon) {
    $("#text12").addClass("present");
}


if (hour < one) {
    $("#text1").addClass("future");
} else if (hour > five) {
    $("#text1").addClass("past");
} else if (hour = five) {
    $("#text1").addClass("present");
}


if (hour < two) {
    $("#text2").addClass("future");
} else if (hour > five) {
    $("#text2").addClass("past");
} else if (hour = five) {
    $("#text5").addClass("present");
}


if (hour < three) {
    console.log(three);
    $("#text3").addClass("future");
} else if (hour > three) {
    $("#text3").addClass("past");
} else if (hour = three) {
    $("#text3").addClass("present");
}

if (hour < four) {
    $("#text4").addClass("future");
} else if (hour > four) {
    $("#text4").addClass("past");
} else if (hour = four) {
    $("#text4").addClass("present");
}


if (hour < five) {
    $("#text5").addClass("future");
} else if (hour > five) {
    $("#text5").addClass("past");
} else if (hour = five) {
    $("#text5").addClass("present");
}
























