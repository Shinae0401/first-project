// main__banner //
function bannerSwitcher() {
    next = $(".sec-1-input").filter(":checked").next(".sec-1-input");
    if (next.length) next.prop("checked", true);
    else $(".sec-1-input").first().prop("checked", true);
}
var bannerTimer = setInterval(bannerSwitcher, 5000);

$(".controls label").click(function () {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000);
});


// products //
    let mainSliderSelector = ".products__slider",
        thumbSliderSelector = ".thumb-slider";

    let mainSliderOptions = {
        loop: true,
        speed: 2000,
        parallax: true,
        loopAdditionalSlides: 7,
        grabCursor: true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    };

    let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

    let thumbSliderOptions = {
        loop: true,
        speed: 1500,
        parallax: true,
        spaceBetween: 20,
        slidesPerView: 7,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
    };

    let thumbSlider = new Swiper(thumbSliderSelector, thumbSliderOptions);

    mainSlider.controller.control = thumbSlider;
    thumbSlider.controller.control = mainSlider;


// board //
var swiper = new Swiper(".board__Swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


