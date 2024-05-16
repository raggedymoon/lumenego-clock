$(document).ready(function() {
    function updateTime() {
        var now = new Date();
        var hours = now.getHours() % 12 || 12; // Convert to 12-hour format
        var minutes = now.getMinutes();
        var ampm = now.getHours() >= 12 ? 'PM' : 'AM'; // Determine AM or PM
        var timeString = hours + (minutes < 10 ? "0" : "") + minutes + " " + ampm;
        
        $('#clock').text(timeString); // Set the time string directly
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
