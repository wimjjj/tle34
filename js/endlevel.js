var getParams = new URLSearchParams(window.location.search);

var score = getParams.get('score');
var time = getParams.get('time');
var level = getParams.get('level');
level++;


document.getElementById('score').innerHTML = score;
document.getElementById('time').innerHTML = time;
document.getElementById('next').href = "/level.html?level=" + level;
