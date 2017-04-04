/**
 * Created by wim on 30/03/17.
 */

/**
 * array with the items the players has already found
 * @type {Array}
 */
var foundItems = [];

/**
 * amout af items
 * @type {number}
 */
var numberOfItems = $('.item').length;

/**
 * add the onClick listerners to the items
 */
$(".item").click(function (e) {
    if (foundItems.indexOf(e.target.id) !== -1) return;

    foundItems.push(e.target.id);
    e.target.classList.add("black", "pop");

    showMessageBox("Je hebt een vliegtuig gevonden!");
    updateCounter();
    checkForWin();

});

/**
 * increases the timer every 1s with 1
 */
var timer = setInterval(function () {
    let elem = $("#time");
    let count = Number(elem.html());
    count++;
    elem.html(count);
}, 1000);

/**
 * shows the big messageBox.
 * will remove all other messageBoxes show
 * messageBox wil be removed after 2.5s
 * @param msg
 * @param flash
 */
function showMessageBox(msg, flash = true) {
    let messageBoxes = $(".messageBox");
    if (messageBoxes.length) messageBoxes.remove();

    let elem = document.createElement('p');
    elem.classList.add("messageBox");
    elem.innerHTML = msg;
    document.body.append(elem);

    if (flash) {
        setTimeout(function () {
            this.elem.remove();
        }.bind({elem}), 2500);
    }
}

/**
 * updates the counter with the current number of found items
 */
function updateCounter() {
    $("#counter").html(Number(foundItems.length) + "/" + numberOfItems);
}

function checkForWin() {
    if (foundItems.length === numberOfItems) {
        showMessageBox("Je hebt gewonnen!", false);
        clearInterval(timer);
    }
}