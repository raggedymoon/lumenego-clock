function updateTime() {
    var now = new Date();
    var hours = now.getHours() % 12 || 12;
    var minutes = now.getMinutes();
    var ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    var timeString = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
    
    document.getElementById('clock').innerText = timeString;
}

function updateDate() {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayName = days[now.getDay()];
    var monthName = months[now.getMonth()];
    var dateString = `${dayName}, ${monthName} ${now.getDate()}, ${now.getFullYear()}`;
    
    document.getElementById('date').innerText = dateString;
}

setInterval(updateTime, 1000);
updateTime();

setInterval(updateDate, 1000);
updateDate();
