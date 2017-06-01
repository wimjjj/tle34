function setName(){
    var name = document.getElementById('name').value;

    if(!name || name == ""){
        return;
    }

    document.cookie = "name=" + name;

    window.location.href = "/level.html?level=1";
}