$(document).ready(function() {
    // Initialize the clock
    var clock = new FlipClock($('.clock'), {
        clockFace: 'TwelveHourClock',
        showSeconds: false
    });

    // Function to update the clock time
    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Convert the current time into total seconds and set the clock
        var timeInSeconds = ((hours % 12 || 12) * 3600) + (minutes * 60) + seconds;
        clock.setTime(timeInSeconds);
        clock.start();
    }

    // Update the clock every second to ensure it stays accurate
    setInterval(updateTime, 1000);
    // Initial update
    updateTime();

    // Update the date
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
