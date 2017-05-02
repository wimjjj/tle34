/**
 * Created by wim on 30/03/17.
 */


/**
 * array with the items the players has already found
 * @type {array}
 */
var foundItems = [];

/**
 * amout af items
 * @type {number}
 */
var numberOfItems;

/**
 * value of the timer
 * @type {number}
 */
var timer = 0

//init the counter

loadLevel(1).then(initGame);



/**
 * add the onClick listerners to the items
 */
function initGame(){
    numberOfItems = $('.item').length;

    updateCounter();
    
    $(".item").click(function (e) {
        if (foundItems.indexOf(e.target.id) !== -1) return;

        foundItems.push(e.target.id);
        e.target.classList.add("black", "pop");

        showMessageBox("Je hebt een vliegtuig gevonden!");
        updateCounter();
        checkForWin();

    });
}

/**
 * increases the timer every 1s with 1
 */
var timerId = setInterval(function () {
    let elem = $("#timer");

    elem.html(timer++);

    let left = $("#background").width() - elem.width() - 10;
    elem.css({'left': left});
}, 1000);

/**
 * shows the big messageBox.
 * will remove all other messageBoxes show
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

/**
 * checks if the player has won
 * if so, show the 'you have won' message and stop the timer
 */
function checkForWin() {
    if (foundItems.length === numberOfItems) {
        showMessageBox("Je hebt gewonnen!", false);
        clearInterval(timerId);
    }
}