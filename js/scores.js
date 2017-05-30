var elem = document.getElementById('scores');

$.getJSON('/api/score.php').then((result) => {
    var scores = result.data;

    console.log(scores);
})