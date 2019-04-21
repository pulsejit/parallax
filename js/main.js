const parallax = document.getElementById("parallax");

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;/*this is the value how much the user has ascrolled from up*/
    parallax.style.backgroundPositionY = offset * 0.7 + "px";//if the page scrolled offset pixels then the image will scroll offset*0.7 pixels
})  
