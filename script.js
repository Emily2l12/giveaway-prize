// Set the initial time in seconds
var timeLeft = 10 * 24 * 60 * 60;
// Set the data-time-left attribute to the time left
document.getElementById("timer").setAttribute("data-time-left", timeLeft);

// Set the initial timestamp
var startTime = performance.now();
// Declare and initialize a new variable with the Date object
// Change the target date to a fixed date that is 10 days ahead of the current date
var targetDate = new Date("2024-03-10");

// Calculate the target timestamp
var targetTime = startTime + timeLeft * 1000;

// Update the timer every 1 second
var timer = setInterval(function() {

    // Get the current timestamp
    var currentTime = performance.now();

    // Calculate the difference between the current and target timestamp
    var diff = targetTime - currentTime;

    // If the difference is positive and the target date is still in the future, update the time left
    if (diff > 0 && targetDate > new Date()) {
        // Convert the difference to seconds
        timeLeft = Math.floor(diff / 1000);

        // Display the time left in the element
        document.getElementById("timer").innerHTML = formatTime(timeLeft);
    } else {
        // If the difference is zero or negative, reset the timer and the target date and time
        timeLeft = 10 * 24 * 60 * 60;
        // Reset the target date to the original value
        targetDate = new Date(targetTime);
        document.getElementById("timer").innerHTML = formatTime(timeLeft);
    }
}, 1000);

// Format the time left to show days, hours, minutes, and seconds
function formatTime(timeLeft) {
    // Calculate the number of days, hours, minutes, and seconds
    var days = Math.floor(timeLeft / (24 * 60 * 60));
    var hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    var seconds = Math.floor(timeLeft % 60);

    // Add leading zeros if needed
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Return the formatted time
    return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}