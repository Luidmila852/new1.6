import '../scss/style.scss'
console.log('Works!')

    //свайпер
window.addEventListener('DOMContentLoaded', () => {
    const resizebleSwiper = (breakpoint, swiperClass, swiperSettings) => {
        let swiper;
        breakpoint = window.matchMedia(breakpoint);
        const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);
        }
        const checker = function() {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };
        breakpoint.addEventListener('change', checker);
        checker();
    }
    resizebleSwiper('(max-width:767px)', '.slider-1', {
        direction: 'horizontal',
       /* slidesPerView: 1.2,*/
        spaceBetween: 15,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                enabled: true,
            },
            320: {
                slidesPerView: 1.1,
                enabled: true,
            },
            350: {
                slidesPerView: 1.3,
                enabled: true,
            },
            390: {
                slidesPerView: 1.5,
                enabled: true,
            },
            540: {
                slidesPerView: 2,
                enabled: true,
            },
            768: {
                enabled: false,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
    });
    resizebleSwiper('(max-width:768px)', '.slider-2', {
        direction: 'horizontal',
        /*slidesPerView: 1.2,*/
        spaceBetween: 15,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                enabled: true,
            },
            320: {
                slidesPerView: 1.1,
                enabled: true,
            },
            350: {
                slidesPerView: 1.3,
                enabled: true,
            },
            390: {
                slidesPerView: 1.5,
                enabled: true,
            },
            540: {
                slidesPerView: 2,
                enabled: true,
            },
            768: {
                enabled: false,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
    });
    resizebleSwiper('(max-width:768px)', '.slider-3', {
        direction: 'horizontal',
       /* slidesPerView: 1.2,*/
        spaceBetween: 15,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                enabled: true,
            },
            320: {
                slidesPerView: 1.1,
                enabled: true,
            },
            350: {
                slidesPerView: 1.3,
                enabled: true,
            },
            390: {
                slidesPerView: 1.5,
                enabled: true,
            },
            540: {
                slidesPerView: 2,
                enabled: true,
            },
            768: {
                enabled: false,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
    });
});
//кнопка, где текст
let btn1 = document.querySelector('.about__more');
let about = document.querySelector('.about__content');
btn1.addEventListener('click', function() {
    about.classList.toggle('about--open');
    btn1.classList.toggle('btn--up');
    if (about.classList.contains('about--open')) {
        btn1.textContent = 'Скрыть';
    } else {
        btn1.textContent = 'Показать все';
    }
});
//кнопка,где бренды
let btn = document.querySelector('.btn');
let brand = document.querySelector('.slider-1');
btn.addEventListener('click', function() {
    brand.classList.toggle('brand--open');
    btn.classList.toggle('btn--up');
    if (brand.classList.contains('brand--open')) {
        btn.textContent = 'Скрыть';
    } else {
        btn.textContent = 'Показать все';
    }
});
//кнопка,где виды техники
let btn2 = document.querySelector('.technic__button');
let technic = document.querySelector('.slider-2');
btn2.addEventListener('click', function() {
    technic.classList.toggle('technic--open');
    btn2.classList.toggle('btn--up');
    if (technic.classList.contains('technic--open')) {
        btn2.textContent = 'Скрыть';
    } else {
        btn2.textContent = 'Показать все';
    }
});
//модальные окна
let openBtn = document.querySelector('.page__open-menu');
let aside = document.querySelector('.aside');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.button-burger');
overlay.hidden = true;

function openAside() {
    openBtn.addEventListener('click', function() {
        aside.classList.toggle('aside--open');
        overlay.style.zIndex = '11';
        overlay.hidden = false;
    });
}
openAside()

function closeAside() {
    document.addEventListener('keydown', function(evt) {
        if (evt.key == "Escape") {
            aside.classList.remove('aside--open');
            overlay.hidden = true;
        }
    });
    overlay.addEventListener('click', function(evt) {
        if (evt.target !== aside && !aside.contains(evt.target)) {
            aside.classList.remove('aside--open');
            callback.classList.remove('callback-open');
            feedback.classList.remove('feedback-open');
            overlay.hidden = true;
        }
    });
    closeBtn.addEventListener('click', function() {
        aside.classList.remove('aside--open');
        overlay.hidden = true;
    });
}
closeAside()
let phone = document.querySelector('.button-phone');
let callback = document.querySelector('.callback');
let feedback = document.querySelector('.feedback');
let chat = document.querySelector('.button-chat');

function opencallback() {
    phone.addEventListener('click', function() {
        callback.classList.toggle('callback-open');
        overlay.style.zIndex = '13';
        aside.classList.remove('aside--open');
        overlay.hidden = false;
    });
}
opencallback()

function openfeedback() {
    chat.addEventListener('click', function() {
        feedback.classList.toggle('feedback-open');
        overlay.style.zIndex = '13';
        aside.classList.remove('aside--open');
        overlay.hidden = false;
    });
}
openfeedback()

function closemodal() {
    document.addEventListener('keydown', function(evt) {
        if (evt.key == "Escape") {
            callback.classList.remove('callback-open');
            feedback.classList.remove('feedback-open');
            overlay.style.zIndex = '11';
        }
    });
    const modalFeedbackCloseButton = feedback.querySelector('.modal__close');
    if (modalFeedbackCloseButton) {
        modalFeedbackCloseButton.addEventListener('click', function() {
            feedback.classList.remove('feedback-open');
            overlay.hidden = true;
            overlay.style.zIndex = '11';
        });
    }
    // Закрытие модального окна обратного звонка
    const modalCallbackCloseButton = callback.querySelector('.modal__close');
    if (modalCallbackCloseButton) {
        modalCallbackCloseButton.addEventListener('click', function() {
            callback.classList.remove('callback-open');
            overlay.hidden = true;
            overlay.style.zIndex = '11';
        });
    }
}
closemodal()