$(document).ready(function() {
    var clock = new FlipClock($('#clock'), {
        clockFace: 'HourlyCounter', // Use 'HourlyCounter' to display hours and minutes only
        showSeconds: false // This removes the seconds
    });

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
