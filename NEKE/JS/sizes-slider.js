export const sizesSlider = () => {
    new Swiper(".sizes__slider", {
        slidersPerView: "auto",
        centeredSlides: true,
        loop: true,
        mousewheel: {
            forceToAxsis: true,
        },
        navigation: {
            prevEl: '.sizes__slider-button--prev',
            nextEl: '.sizes__slider-button--next',
        }
    });
};