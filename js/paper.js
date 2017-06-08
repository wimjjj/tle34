function loadscores(){
    $.getJSON("/api/topscore.php?level=0&limit=5").then((result) => {
        console.log(result);
        if(result.data.length > 0) drawScores(result.data);
    });
}

function drawScores(scores){
    var elem = $("#scores");
    elem.html("");

    var html = ``;
    for(var i = 1; i < scores.length + 1; i++){
        var score = scores[i - 1];
        html += `<p>` + i + `. ` + score.name + `: ` + score.score + `</p>`;
    }
    elem.html(html);
}

loadscores();
setInterval(loadscores, 1500);