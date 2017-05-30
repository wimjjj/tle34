var elem = document.getElementById('scores');

$.getJSON('/api/scores.php').then((result) => {
    var scores = result.data;

    console.log(scores);
})