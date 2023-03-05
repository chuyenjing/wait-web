var i = 0;
var txt = '抱歉 當機處理中' +'\n'+
    'sorry! we are solving problem...';
var speed = 200;
var images = new Array();
images[0] = "https://stickershop.line-scdn.net/stickershop/v1/product/12012046/LINEStorePC/main.png";
images[1] = "https://stickershop.line-scdn.net/stickershop/v1/sticker/405711578/android/sticker.png";
setTimeout("changeImage()", 2000);
var timeoutId = null;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("sorry").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function changeImage(x) {
    document.getElementById("img").src = images[x];
    timeoutId = setTimeout(function() {
        changeImage((x + 1) % images.length);
    }, 2000);
}
function start(){
    var timer = document.querySelector("#timer");
    var number = 20;
    setInterval(function(){
        number -- ;
        if(number <= 0 ){
            number = 0;
            location.href='https://www.youtube.com/';
        }
        timer.innerText = number + 0 }, 1000);

}
typeWriter();
changeImage(0);
start();
