$(document).ready(function() {
    var clock = new FlipClock($('#clock'), {
        clockFace: 'HourlyCounter',
        autoStart: false
    });

    function updateTime() {
        var now = new Date();
        var hours = now.getHours() % 12 || 12; // Convert to 12-hour format
        var minutes = now.getMinutes();
        var timeString = hours + (minutes < 10 ? "0" : "") + minutes;
        
        clock.setTime(hours * 3600 + minutes * 60); // Set time in seconds
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
