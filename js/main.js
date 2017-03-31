/**
 * Created by wim on 30/03/17.
 */

/**
 * array with the items the players has already found
 * @type {Array}
 */
var foundItems = [];

/**
 * add the onClick listerners to the items
 */
$( ".item" ).click(function(e) {
    if(foundItems.indexOf(e.target.id) !== -1) return;

    e.target.classList.add("greyscale", "pop");

    showMessageBox("Je hebt een vliegtuig gevonden!");
    updateCounter();

    foundItems.push(e.target.id);
});

/**
 * shows the big messageBox.
 * will remove all other messageBoxes show
 * messageBox wil be removed after 2.5s
 * @param msg
 */
function showMessageBox(msg){
    var messageBoxes = $(".messageBox");
    if(messageBoxes.length) messageBoxes.remove();

    var elem = document.createElement('p');
    elem.classList.add("messageBox");
    elem.innerHTML = msg;
    document.body.append(elem);

    setTimeout(function(){
        this.elem.remove();
    }.bind({elem}), 2500);
}

/**
 * updates the counter by 1
 */
function updateCounter(){
 var elem = $("#counter");
 var count = elem.html().substr(0, elem.html().indexOf("/"));
 count++;

 elem.html(count + elem.html().substr(elem.html().indexOf("/")));
}