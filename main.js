let before = $('.before');
let after = $('.after');
let imgs = $('.imgs');
let play = $('.play');
let pause = $('.pause');

after.on('click', movingRight);
before.on('click', movingLeft);
play.on('click', playSlider);
pause.on('click', pauseSlider);

// $("body").load(function() {     // jquery - ne funkcioniše
//   playSlider()
// });

document.getElementsByTagName("body")[0].onload = function() { //JS funkcioniše
    playSlider()
};


function movingRight() {         //Right Arrow Function
    pauseSlider();
    // after.off('click');
    console.log(this);
    // setTimeout(function() {  
    toTheRight()
    // after.on('click');
    // console.log(this); 
    // }, 3000);
}


function movingLeft() {          //Left Arrow Function
    pauseSlider();
    // before.off('click');
    toTheLeft();
    // let imgs = $('.imgs');
    imgs.each(function(e) { // Just for testing changing classes...
    console.log(imgs[e]);
    });
};


function playSlider() {
    plays(0);
}

function pauseSlider() {
    plays(1);
}


function plays(x) {
    // play.off('click');
    if (x == 0) {
        toTheRight();
        myInterval = setInterval(function() {
        toTheRight()
        // document.querySelector(".play").on
        // play.on('click');
        }, 4000);
    }
    if (x == 1) {
        clearInterval(myInterval);
        // pause.off('click');
        // play.on('click');
    }
}


function toTheRight() {
    $('.img3').removeClass('img3').addClass('imga2');
    $('.img1').removeClass('img1').addClass('img3');
    $('.img2').removeClass('img2').addClass('img1')
    $('.imga2').removeClass('imga2').addClass('img2');
}

function toTheLeft() {
    $('.img2').removeClass('img2').addClass('imga3')
    $('.img1').removeClass('img1').addClass('img2');
    $('.img3').removeClass('img3').addClass('img1');
    $('.imga3').removeClass('imga3').addClass('img3');
}
