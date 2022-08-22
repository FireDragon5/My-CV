function scroll_summary(){
        window.scrollTo(0, 1100);
}


function favicon_click(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function submit_btn(){
    if (document.getElementById("name").value == ""){

        alert("Please fill out Name fields");

    }else if (document.getElementById("email").length == 0){

        alert("Please fill out Email fields");

    }else if (document.getElementById("message").length == 0){
        alert("Please fill out Message fields");

    }else {
        alert("Thank you for your message!");

    }

    
}


function spigot_click() {

    window.open("https://www.spigotmc.org/resources/authors/firedragon1062.983245/")


}
function github_click() {

    window.open("https://github.com/FireDragon5")


}


