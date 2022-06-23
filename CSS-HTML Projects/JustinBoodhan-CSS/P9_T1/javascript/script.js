$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }
        else {
            $('.navbar').removeClass("sticky")
        }
    })
    $('.ham').click(function(){
        $('.menu').toggleClass("active");
        $('.ham i').toggleClass("active");
    })


    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }
    else{
        $('.scroll-up-btn').removeClass("show");
    }
});

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Designer", "Freelancer","Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
    strings: ["Designer", "Freelancer","Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });

// owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
}
});
