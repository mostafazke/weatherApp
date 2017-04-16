// Variables
var	time = $("#time"),
    clock = $("#clock"),
    city = $("#city"),
    moon = $("#moon"),
    icon = $("#icon"),
    temp = $("#temp"),
    deg = $("#deg"),
    desc = $("#desc"),
    day = $("#day"),
    date = $("#date"),
    lat,
    lon,
    iconID,
    dayCon,
    fahrenheit,
    celsius,
    day,
    night,
    background;
// Ready
$(function() {
    day.text(moment().format('dddd'));
    date.text(moment().format("MMMM, D"));
    moon.addClass(moonArr[moment().format("iD") - 1]);
setInterval(function() {
    time.text(time.text() == moment().format("HH:mm") ? moment().format("HH:mm") : moment().format("h:mm"));
    clock.addClass(clockArr[moment().format("h") - 1]);
}, 500);
time.click(function() {
    time.text(time.text() == moment().format("HH:mm") ? moment().format("h:mm") : moment().format("HH:mm"));
});
    $.getJSON('http://ipinfo.io', function(data){
        lat = data.loc.split(",")[0];
        lon = data.loc.split(",")[1];
        $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=f19ab83aa06dc74d66a49829fd97cc72`, function(data){
            city.text(data.name);
            temp.text(Math.round(data.main.temp));
            desc.text(data.weather[0].description);
            iconID = data.weather[0].icon;
            dayCon = iconID.charAt(iconID.length - 1);
            fahrenheit = Math.round(data.main.temp);
            celsius = Math.round((fahrenheit - 32) * (5/9));
            deg.click(function(){
                if (deg.children().last().hasClass("wi-fahrenheit")) {
                    deg.children().last().removeClass("wi-fahrenheit");
                    deg.children().last().addClass("wi-celsius");
                    temp.text(celsius);
                } else {
                    deg.children().last().removeClass("wi-celsius");
                    deg.children().last().addClass("wi-fahrenheit");
                    temp.text(fahrenheit);
                }
            }); 
switch (iconID.substr(0,2)) {
case '01':
    day = 'wi-day-sunny';
    night = 'wi-night-clear';
    background = 'clear sky-min.JPG';
    break;
case '02':
    day = 'wi-day-cloudy';
    night = 'wi-night-cloudy';
    background = 'few clouds-min.JPG';
    break;
case '03':
    day = 'wi-day-cloudy-high';
    night = 'wi-night-cloudy-high';
    background = 'scattered clouds-min.jpg';
    break;
case '04':
    day = 'wi-day-lightning';
    night = 'wi-night-lightning';
    background = 'broken clouds-min.jpg';
    break;
case '09':
    day = 'wi-day-hail';
    night = 'wi-night-hail';
    background = 'shower rain-min.jpg';
    break;
case '10':
    day = 'wi-day-rain';
    night = 'wi-night-rain';
    background = 'rain-min.JPG';
    break;
case '11':
    day = 'wi-day-thunderstorm';
    night = 'wi-night-thunderstorm';
    background = 'thunderstorm-min.png';
    break;
case '13':
    day = 'wi-day-snow';
    night = 'wi-night-snow';
    background = 'snow-min.jpeg';
    break;
case '50':
    day = 'wi-day-windy';
    night = 'wi-night-cloudy-windy';
    background = 'mist-min.jpg';
    break;
default:
    day = 'wi-day-sunny';
    night = 'wi-night-clear';
    background = 'clear sky-min.JPG';
}
 $('body').css('backgroundImage', "url('img/"+background+"')");
            if (dayCon === 'd') {
                icon.removeClass('wi-day-sunny');
                icon.addClass(day);
            } else {
                icon.removeClass('wi-day-sunny');
                icon.addClass(night);
            }
        });
    });
});
/*
 ** Extra Features
 */
var moonArr = [
    'wi-moon-waxing-crescent-1',
    'wi-moon-waxing-crescent-2',
    'wi-moon-waxing-crescent-3',
    'wi-moon-waxing-crescent-4',
    'wi-moon-waxing-crescent-5',
    'wi-moon-waxing-crescent-6',
    'wi-moon-first-quarter',
    'wi-moon-waxing-gibbous-1',
    'wi-moon-waxing-gibbous-2',
    'wi-moon-waxing-gibbous-3',
    'wi-moon-waxing-gibbous-4',
    'wi-moon-waxing-gibbous-5',
    'wi-moon-waxing-gibbous-6',
    'wi-moon-full',
    'wi-moon-waning-gibbous-1',
    'wi-moon-waning-gibbous-2',
    'wi-moon-waning-gibbous-3',
    'wi-moon-waning-gibbous-4',
    'wi-moon-waning-gibbous-5',
    'wi-moon-waning-gibbous-6',
    'wi-moon-third-quarter',
    'wi-moon-waning-crescent-1',
    'wi-moon-waning-crescent-2',
    'wi-moon-waning-crescent-3',
    'wi-moon-waning-crescent-4',
    'wi-moon-waning-crescent-5',
    'wi-moon-waning-crescent-6',
    'wi-moon-new',
    'wi-moon-new',
    'wi-moon-new'
];
var clockArr = [
    'wi-time-1',
    'wi-time-2',
    'wi-time-3',
    'wi-time-4',
    'wi-time-5',
    'wi-time-6',
    'wi-time-7',
    'wi-time-8',
    'wi-time-9',
    'wi-time-10',
    'wi-time-11',
    'wi-time-12'
];
