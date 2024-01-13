$(document).ready(function() {
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    let currentIndex3 = 0;
    let currentIndex4 = 0;

    function showSlide(index, slider) {
        $(slider).find(".slide").removeClass("show");
        $(slider).find(".slide").eq(index).addClass("show");
    }

    function nextSlide(index, slider) {
        const currentIndex = index;
        currentIndex1 = (currentIndex + 1) % $(".slider .slide").length;
        showSlide(currentIndex, slider);
    }

    setInterval(function() {
        nextSlide(currentIndex1, ".slider1");
        currentIndex2 = (currentIndex1 + 1) % $(".slider1 .slide").length;
    }, 2000);

    setInterval(function() {
        nextSlide(currentIndex2, ".slider2");
        currentIndex3 = (currentIndex2 + 1) % $(".slider2 .slide").length;
    }, 2000);

    setInterval(function() {
        nextSlide(currentIndex3, ".slider3");
        currentIndex4 = (currentIndex3 + 1) % $(".slider3 .slide").length;
    }, 2000);
    setInterval(function() {
        nextSlide(currentIndex3, ".slider4");
        currentIndex4 = (currentIndex3 + 1) % $(".slider4 .slide").length;
    }, 2000);

});
