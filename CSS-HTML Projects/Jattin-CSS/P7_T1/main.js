var mybutton = documnent.getElementById("btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener('click', lightboxClick);

function lightboxClick(Event) {
    var elem = Event.target,
    elemID = elem.getAttribute('id'),
    lightboxImg = document.getElementById("lightbox-overlay"),
    newImg = new Image();
}

if (elem.hasAttribute('data-lightbox')) {
    Event.preventDefault();

    newImg.onload = function() {
    lightboxImg.src = this.src;
}

    lightboxImg.src = '';
    newImg.src = getAttribute('data-lightbox');
    lightboxClick.classList.add('visible');
}

if (elemID == 'lightbox-image' || elemID == 'lightbox-overlay') {
    Event.preventDefault();

    lightbox.classList.remove('visible');
}