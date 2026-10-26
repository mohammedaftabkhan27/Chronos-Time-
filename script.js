
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const periodElement = document.getElementById("period");
const weekdayElement = document.getElementById("weekday");
const fullDateElement = document.getElementById("full-date");
const timezoneElement = document.getElementById("timezone");
const greetingElement = document.getElementById("greeting");

function updateClock() {
    const now = new Date();

    // Get time in 12-hour format
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    // Update the digital clock
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
    periodElement.textContent = period;

    // Update the weekday
    weekdayElement.textContent = now.toLocaleDateString("en-IN", {
        weekday: "long"
    });

    // Update the full date
    fullDateElement.textContent = now.toLocaleDateString("en-IN", {
        month: "long",
        day: "2-digit",
        year: "numeric"
    });

    // Display the local time zone
    const timezone = Intl.DateTimeFormat()
        .resolvedOptions().timeZone;

    timezoneElement.textContent =
        timezone === "Asia/Kolkata" ? "INDIA STANDARD TIME" : timezone;

    // Change the greeting based on the hour
    if (now.getHours() < 12) {
        greetingElement.textContent = "GOOD MORNING · YOUR TIME";
    } else if (now.getHours() < 17) {
        greetingElement.textContent = "GOOD AFTERNOON · YOUR TIME";
    } else if (now.getHours() < 21) {
        greetingElement.textContent = "GOOD EVENING · YOUR TIME";
    } else {
        greetingElement.textContent = "LATE NIGHT · YOUR TIME";
    }
}

// Show the correct time immediately
updateClock();

// Refresh the clock every second
setInterval(updateClock, 1000);
