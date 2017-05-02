/**
 * Load a level
 * @param {int} levelNummer 
 * @return {Promise} 
 */
function loadLevel(levelNummer){
    return new Promise(function(resolve, reject){
        $.getJSON("/levels/level" + levelNummer + ".json").then((level) => {
            console.log(level);

            for(let i = 0; i < level.planes.length; i++){
                addPlane(level.planes[i], i);
            }

            addBackground(level.background_image_url);

            setMessage(level.message)

            resolve();
        });
    });
}

/**
 * add a plane
 * @param {object} plane 
 * @param {int} i 
 */
function addPlane(plane, i){
    let elem = document.createElement("img");
    elem.src = plane.image;
    elem.className = "item";
    elem.id = "plane" + i;
    elem.style.height = plane.height;
    elem.style.left = plane.left;
    elem.style.top = plane.top;

    document.body.appendChild(elem);
}

/**
 * add the level background
 * @param {string} background 
 */
function addBackground(background){
    let elem = document.createElement("img");
    elem.src = background;
    elem.id = "background";
    elem.style.zIndex = -100

    document.body.appendChild(elem);
}

/**
 * sets the messagebox
 * @param {sting} msg 
 */
function setMessage(msg){
    $("#info").html(msg);
}
