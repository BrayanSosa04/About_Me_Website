function tabButton(event, but){
    var tab_content = document.getElementsByClassName("tab_content");
    var tab_link = document.getElementsByClassName("tab_link");

    for(var i = 0; i < tab_content.length; i++){
        tab_content[i].style.display = "none";
    }
}