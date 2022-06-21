<<<<<<< Updated upstream
=======
/*
>>>>>>> Stashed changes
var mybutton = documnent.getElementById("btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
<<<<<<< Updated upstream

=======
*/
>>>>>>> Stashed changes
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener('click', lightboxClick);

<<<<<<< Updated upstream
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
=======
// Define a function that filters the unwanted click events on the document
function lightboxClick(event) {
    var elem = event.target,
        elemID = elem.getAttribute('id'),
        lightboxImg = document.getElementById('lightbox-image'),
        lightbox = document.getElementById("lightbox-overlay"),
        newImg = new Image();

    // If we click an element with the attribute "data-lightbox", show the lightbox
    if (elem.hasAttribute('data-lightbox')) {
        event.preventDefault();

        newImg.onload = function() {
            lightboxImg.src = this.src;
        }

        lightboxImg.src = '';
        newImg.src = elem.getAttribute('data-lightbox');
        lightbox.classList.add('visible');
    }

    // If we click any of these 2 elements, close the lightbox
    if (elemID == 'lightbox-image' || elemID == 'lightbox-overlay') {
        event.preventDefault();

        lightbox.classList.remove('visible');
    }
>>>>>>> Stashed changes
}