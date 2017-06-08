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
    for(score of scores){
        html += `<p>` + score.name + `: ` + score.score + `</p>`;
    }
    elem.html(html);
}

setInterval(loadscores, 1000);