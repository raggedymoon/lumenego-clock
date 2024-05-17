$(document).ready(function() {
    // Initialize the clock
    var clock = new FlipClock($('.clock'), {
        clockFace: 'TwelveHourClock',
        showSeconds: false,
        autoStart: true
    });

    // Function to update the clock time
    function updateTime() {
        $.get("https://timeapi.io/api/Time/current/zone?timeZone=America/New_York", function(data) {
            var now = new Date(data.dateTime);
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();

            // Adjust for 12-hour format
            var hours12 = hours % 12 || 12; // Convert 0 to 12
            var timeInSeconds = (hours12 * 3600) + (minutes * 60) + seconds;

            // Set the clock time and start it
            clock.setTime(timeInSeconds);
        });
    }

    // Update the clock every minute to ensure it stays accurate
    setInterval(updateTime, 60000);
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

    // Update the date every second to ensure accuracy
    setInterval(updateDate, 1000);
    // Initial update
    updateDate();
});
