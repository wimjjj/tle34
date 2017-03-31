/**
 * Created by wim on 30/03/17.
 */

/**
 * add the onClick listerners to the items
 */
$( ".item" ).click(function(e) {
    e.target.classList.add("greyscale", "pop");
    showMessageBox("Je hebt een vliegtuig gevonden!");
    updateCounter();
});

/**
 * shows the big messageBox.
 * will remove all other messageBoxes show
 * messageBox wil be removed after 4s
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
    }.bind({elem}), 4000);
}

/**
 * updates the counter by 1
 */
function updateCounter(){
 var elem = $("#counter");
 var count = elem.html().slice(0, -3);
 count++;

 elem.html(count + elem.html().slice(-3))
}