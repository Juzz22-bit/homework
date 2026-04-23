export const reviewsSlider = () => {
    new Swiper(".reviews__slider", {
        slidesPrevView: "auto",
        centeredSlides: true,
        slidesPerGroup: 1,
        loop: true,
        mousewheel: {
            forceToAxis: true,
        },
        navigation: {
            prevEl: ".rewiews__slider-button--prev",
            nextEl: ".reviews__slider-button--next",
        },
    });
};