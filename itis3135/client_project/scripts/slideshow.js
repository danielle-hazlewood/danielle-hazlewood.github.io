let slideIndex = {
    mens: 1,
    women: 1
};

let slides = {
    mens: document.getElementsByClassName("slides-mens"),
    women: document.getElementsByClassName("slides-women")
};

function showSlides(n, type) {
    let i;
    if (n > slides[type].length) {
        slideIndex[type] = 1;
    } else if (n < 1) {
        slideIndex[type] = slides[type].length;
    }

    for (i = 0; i < slides[type].length; i++) {
        slides[type][i].style.display = "none";
    }
    slides[type][slideIndex[type] - 1].style.display = "block";
}

function plusSlides(n, type) {
    slideIndex[type] += n;
    showSlides(slideIndex[type], type);
}

showSlides(slideIndex.mens, 'mens');
showSlides(slideIndex.women, 'women');