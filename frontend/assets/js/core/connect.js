
// var server = "http://192.168.1.3/"
var server = "https://api.acyst.tech/"
sessionStorage.setItem('ip', btoa(server)); console.log(server);

var dat = new Date();
var date = formatDate(dat);console.log(date);

var time = formatTime(dat);console.log(time);

sessionStorage.setItem('date', btoa(date));

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function formatTime(date) {
    var d = new Date(date),
        minutes = '' + (d.getMinutes() + 1),
        seconds = '' + d.getSeconds(),
        hours = d.getHours();

    if (minutes.length < 2) minutes = '0' + minutes;
    if (seconds.length < 2) seconds = '0' + seconds;
    if (hours.length < 2) hours = '0' + hours;

    return [hours, minutes, seconds].join(':');
}

    // if (sessionStorage.getItem('userId') !== null){
    //     window.location.href = "Lock";
    // }