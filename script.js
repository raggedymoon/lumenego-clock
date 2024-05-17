$(document).ready(function() {
    // Initialize the clock
    var clock = new FlipClock($('.clock'), {
        clockFace: 'TwelveHourClock',
        showSeconds: false,
        autoStart: false
    });

    // Function to update the clock time
    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Log the current time to debug
        console.log("Current Time:", hours, minutes, seconds);

        // Adjust for 12-hour format
        var hours12 = hours % 12 || 12; // Convert 0 to 12
        var timeInSeconds = (hours12 * 3600) + (minutes * 60) + seconds;
        
        // Log the calculated time in seconds
        console.log("Time in Seconds:", timeInSeconds);

        // Set the clock time and start it
        clock.setTime(timeInSeconds);
        clock.start();
    }

    // Update the clock every second to ensure it stays accurate
    setInterval(updateTime, 1000);
    // Initial update
    updateTime();

    // Function to update the date
    function updateDate() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayName = days[now.getDay()];
        const monthName = months[now.getMonth()];
        const dateString = `${dayName}, ${monthName} ${now.getDate()}, ${now.getFullYear()}`;
        $('#date').text(dateString);
    }

    // Update the date every second (just to ensure accuracy)
    setInterval(updateDate, 1000);
    // Initial update
    updateDate();
});
