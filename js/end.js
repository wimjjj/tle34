$.getJSON("/api/lastscores.php", (result) => {
    var elem = document.getElementById('scores');

    for(var i = 0; i < result.data.length; i++){
        var p = document.createElement('p');
        p.innerHTML = "Level " + result.data[i].level + ": " + result.data[i].score;

        elem.appendChild(p);
    }
});