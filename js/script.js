const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    mousewheel: true,
    parallax: true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 50,
        },
        1199: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        }
    }
});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 50,
        },
        1199: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        }
    }
});

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('opened');
    });
});

if(window.innerWidth > 991) {
    const desc = document.querySelector('.description');
    sliderMain.on('snapIndexChange', () => {
        sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
    });
};