$(document).ready(function() {
    var clock = new FlipClock($('#clock'), {
        clockFace: 'HourlyCounter',
        countdown: false,
        showSeconds: false
    });

    function updateTime() {
        var now = new Date();
        var hours = now.getHours() % 12 || 12;
        var minutes = now.getMinutes();
        var ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        var timeInSeconds = (hours * 60 * 60) + (minutes * 60); // Set time in seconds

        clock.setTime(timeInSeconds);
        clock.start();
    }

    updateTime();
    setInterval(updateTime, 60000); // Update every minute

    function updateDate() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dayName = days[now.getDay()];
        const monthName = months[now.getMonth()];
        const dateString = `${dayName}, ${monthName} ${now.getDate()}, ${now.getFullYear()}`;
        $('#date').text(dateString);
    }

    setInterval(updateDate, 1000);
    updateDate();
});
