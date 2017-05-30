var elem = document.getElementById('scores');

$.getJson('/api/scores.php').then((result) => {
    var scores = result.data;

    console.log(scores);
})