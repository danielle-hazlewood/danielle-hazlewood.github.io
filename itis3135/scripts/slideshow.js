let slideindex = 1;
let slides = document.getElementsByClassName("slides");

function showSlides(n) {
    let i;
    if (n > slides.length) {
        slideindex = 1;
    } else if (n < 1) {
        slideindex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideindex - 1].style.display = "block";
}

function plusSlides(n) {
    slideindex += n;
    showSlides(slideindex);
} 

showSlides(slideindex);