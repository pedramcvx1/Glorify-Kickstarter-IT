
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
}

Button = document.getElementById("BestButton")

window.onscroll = function() {scrollfunction()};

function scrollfunction() {
    if (document.body.scrolltop > 20 ||
        document.documentElement.scrollTop > 20{
            Button.style.display = "block";
        } else {
            Button.style.display = "none"
        }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
  }