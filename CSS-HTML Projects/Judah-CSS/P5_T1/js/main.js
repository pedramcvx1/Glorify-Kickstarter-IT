

$(document).ready(function(){
    $nav=$('.nav');
    $togglemenu=$('.toggle-menu');


/** click on toggle icon */
$togglemenu.click(function(){
    $nav.toggleClass('collapse');
    
})

// click to scroll to top
$('.scroll span').click(function(){
    $('html, body').animate({
        scrollTop:0
    }, 2000);
})

});



