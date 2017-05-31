var elem = document.getElementById('scores');

$.getJSON('/api/topscore.php?level=1').then((result) => {
    if(!result.data || !result.data.name || !result.data.score) return;
    renderScore(result.data.level, result.data.name, result.data.score);
});

$.getJSON('/api/topscore.php?level=2').then((result) => {
    if(!result.data || !result.data.name || !result.data.score) return;
    renderScore(result.data.level, result.data.name, result.data.score);
});

$.getJSON('/api/topscore.php?level=3').then((result) => {
    if(!result.data || !result.data.name || !result.data.score) return;
    renderScore(result.data.level, result.data.name, result.data.score);
});

$.getJSON('/api/topscore.php?level=4').then((result) => {
    if(!result.data || !result.data.name || !result.data.score) return;
    renderScore(result.data.level, result.data.name, result.data.score);
});

function renderScore(level, name, score){
    document.getElementById('lvl' + level).innerHTML = 'Level ' + level + ': ' + name + ' met ' + score + ' punten';
}