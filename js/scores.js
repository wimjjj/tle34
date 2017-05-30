var elem = document.getElementById('scores');

$.getJSON('/api/score.php').then((result) => {
    var scores = result.data;

    for(var i = 0; i < scores.length; i++){
        var score = scores[i];

        var e = document.createElement('h2');
        e.innerHTML = score.name + ": " + score.score;

        elem.appendChild(e);
    }
})