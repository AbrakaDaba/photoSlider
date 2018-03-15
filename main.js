let imgs = $('.imgs');
let before = $('.before');
let after = $('.after');

before.click(function() {
    $.fn.movingLeft();
});

after.click(function() {
    $.fn.movingRight();
});

$('.play').click(function() {
    $.fn.playSlider();
})

$('.pause').click(function() {
    $.fn.pauseSlider();
})


$('body').ready(function() {
    $.fn.playSlider();
})

let aftr = function(){
    after.click(function() {
        $.fn.movingRight()
    })
}


let bfr = function() {
    before.click(function() {
        $.fn.movingLeft()
    })
};

imgs.each(function(i) {
    $(this).addClass('img' + (i))
})


$.fn.movingRight = function() { //Right Arrow Function
    $.fn.pauseSlider();
    after.off('click');
    console.log(after);
    $.fn.toTheRight();
    setTimeout(aftr, 3000);
}


$.fn.movingLeft = function() { //Left Arrow Function
    $.fn.pauseSlider();
    before.off('click');
    $.fn.toTheLeft();
    setTimeout(bfr, 3000);
};


$.fn.playSlider = function() {
    // after.off('click');
    console.log(imgs);
    $.fn.toTheRight();
    $('.pause').prop("disabled", false);
    $('.play').prop("disabled", true);
    myInterval = setInterval(function() {
    $.fn.toTheRight(); 
    }, 3500);
}

$.fn.pauseSlider = function() {
    clearInterval(myInterval);
    $('.play').prop("disabled", false);
    $('.pause').prop("disabled", true);
    console.log(imgs);
}


$.fn.toTheRight = function() {
    // $.fn.toTheRight= function(){
    $('.img2').removeClass('img2').addClass('imga2'); //imga2 is helping class (prevent immediately changing img1 to img2 to img0)
    $('.img0').removeClass('img0').addClass('img2');
    $('.img1').removeClass('img1').addClass('img0');
    $('.imga2').removeClass('imga2').addClass('img1');
    // console.log(imgs);
    // i=0;
    // // $('.img0').css('left','0px');
    // // $('.img1').css('left','-600px');
    // // $('.img2').css('left','600px');
    // $.each(imgs, function(i) {
    //     console.log(imgs);
    //     console.log(i);
    // $('.img' + (i + 2)).removeClass('img' + (i + 2)).addClass('imga2');
    // $('.img' + i).removeClass('img' + i).addClass('img' + (i + 2));
    // $('.img' + (i + 1)).removeClass('img' + (i + 1)).addClass('img' + i);
    // $('.imga2').removeClass('imga2').addClass('img' + (i + 1));
    // $(this).addClass('img'+(i))
    // })

}

$.fn.toTheLeft = function() {
    $('.img1').removeClass('img1').addClass('imga3'); //imga3 is helping class (prevent immediately changing img1 to img2 to img0)
    $('.img0').removeClass('img0').addClass('img1');
    $('.img2').removeClass('img2').addClass('img0');
    $('.imga3').removeClass('imga3').addClass('img2');
}