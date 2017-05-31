var getParams = new URLSearchParams(window.location.search);

var score = getParams.get('score');
var time = getParams.get('time');
var level = getParams.get('level');
var nextLevel = Number(level) + 1;
var name = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");

document.getElementById('score').innerHTML = score;
document.getElementById('time').innerHTML = time;
document.getElementById('next').href = "/level.html?level=" + nextLevel;

$.getJSON('/api/topscore.php?level=' + level).then((result) => {
    if(!result.data || !result.data.score || !result.data.name) return;
    document.getElementById('record').innerHTML = result.data.score;
    document.getElementById('recordName').innerHTML = result.data.name;
});

$.post('/api/score.php', {
    name: name,
    score: score,
    level: level
}).then((result) => {
    console.log(result);
});