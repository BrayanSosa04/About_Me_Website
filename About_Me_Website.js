function tabButton(event, but){
    var tab_content = document.getElementsByClassName("tab_content");
    var tab_link = document.getElementsByClassName("tab_link");

    //hide all the content in the tabs
    for(var i = 0; i < tab_content.length; i++){
        tab_content[i].style.display = "none";
    }
    //making all tab_link's inactive
    for(var i = 0; i < tab_link.length; i++){
        tab_link[i].className = tab_link[i].className.replace(" active", "");
    }

    //show the button that was clicked and make that button active
    document.getElementById(but).style.display = "block";
    event.currentTarget.className += " active";
}