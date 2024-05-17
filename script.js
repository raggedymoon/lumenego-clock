$(document).ready(function() {
    function updateTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Adjust for 12-hour format
        var hours12 = hours % 12 || 12; // Convert 0 to 12
        var ampm = hours >= 12 ? 'PM' : 'AM';

        // Set the time in the format expected by TimeCircles
        var timeString = hours12.toString().padStart(2, '0') + ':' +
                         minutes.toString().padStart(2, '0') + ':' +
                         seconds.toString().padStart(2, '0') + ' ' + ampm;

        $('#clock').attr('data-date', timeString);
        $('#clock').TimeCircles().rebuild();
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
