$(document).ready(function(){

    $nav=$('.nav');
    $togglebutton=$('.toggle-button');

    /** click event on toggle */
    $togglebutton.click(function(){
$nav.toggleclass('collapse');
    })



// owl-carousel for blog
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    navText: [$('.owl-navigation .scroll-prev'), $('.owl-navigation .scroll-next')]
}
);





// click to scroll to top
$('.scroll span').click(function(){
    $('html, body').animate({
        scrollTop:0
    }, 3000);
})

});