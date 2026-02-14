export const productSlider = () => {
    new Swiper(".product__slider", {
        slidersPerView: "auto",
        centeredSlides: true,
        loop: true,
        mousewheel: {
            forceToAxsis: true,
        },
        navigation: {
            prevEl: '.product__slider-button--prev',
            nextEl: '.product__slider-button--next',
        }
    });
};