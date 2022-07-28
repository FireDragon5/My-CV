function scroll_summary(){
    document.querySelector('#clickme_button').addEventListener('click', () =>{
        window.scrollTo(0, document.body.scrollHeight);
    });
}


let upscroll = document.getElementById('#upscroll');

function favicon_click(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let cloud1 = document.getElementById('#cloud1');
let cloud2 = document.getElementById('#cloud2');


window.addEventListener('scroll',function(){
    cloud1.style.right = +window.scrollY + 'px';
    cloud2.style.left = +window.pageYOffset + 'px';
});