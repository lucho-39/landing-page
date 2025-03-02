var swiper = Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-butoon-next',
        prevEl: '.swiper-butoon-prev'
    },
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }
});