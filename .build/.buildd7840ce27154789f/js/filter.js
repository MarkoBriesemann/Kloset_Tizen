/**
 * Created with JetBrains WebStorm.
 * User: john
 * Date: 9/16/13
 * Time: 3:36 PM
 * To change this template use File | Settings | File Templates.
 */
var user = JSON.parse(localStorage.user);
/*
 var color = JSON.parse(localStorage.color);
 var weather = JSON.parse(localStorage.weather);
 var style = JSON.parse(localStorage.style);
*/

console.log("filter: user localStorage: " + user);

function navToBack() {
    window.location.href = 'wardrobe.html';
}

function changeColor(_color) {
    console.log(_color);
    localStorage.color = _color;
}

function changeType(_type) {
    console.log(_type);
    localStorage.type = _type;
}

function changeWeather(_weather) {
	console.log(_weather);
    localStorage.weather = _weather;
}


function changeStyle(_style) {
	console.log(_style);
    localStorage.color = _style;
}


document.getElementById('navToBack').addEventListener('click', navToBack, false);

document.getElementById('allColor').addEventListener('click', function(){localStorage.removeItem('color'); console.log("filter: all color");}, false);
document.getElementById('black').addEventListener('click', function(){changeColor('black')}, false);
document.getElementById('white').addEventListener('click', function(){changeColor('white')}, false);
document.getElementById('red').addEventListener('click', function(){changeColor('red')}, false);
document.getElementById('blue').addEventListener('click', function(){changeColor('blue')}, false);
document.getElementById('green').addEventListener('click', function(){changeColor('green')}, false);

document.getElementById('allType').addEventListener('click', function(){localStorage.removeItem('type');}, false);
document.getElementById('top').addEventListener('click', function(){changeType('top')}, false);
document.getElementById('bottom').addEventListener('click', function(){changeType('bottom')}, false);

document.getElementById('allWeather').addEventListener('click', function(){localStorage.removeItem('weather');}, false);
document.getElementById('cold').addEventListener('click', function(){changeWeather('cold')}, false);
document.getElementById('rainy').addEventListener('click', function(){changeWeather('rainy')}, false);
document.getElementById('sunny').addEventListener('click', function(){changeWeather('sunny')}, false);
document.getElementById('normal').addEventListener('click', function(){changeWeather('normal')}, false);

document.getElementById('allStyle').addEventListener('click', function(){changeStyle('all')}, false);
document.getElementById('classic').addEventListener('click', function(){changeStyle('classic')}, false);
document.getElementById('sunday').addEventListener('click', function(){changeStyle('sunday')}, false);
document.getElementById('sportswear').addEventListener('click', function(){changeStyle('sportswear')}, false);