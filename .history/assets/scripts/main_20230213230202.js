$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 4,
        nav: true,

        responsive: {
            0: {
                items: 1,
            },
            720: {
                items: 3,
            },
            1140: {
                items: 5,
            },
        },
    });
});

const sidebarIcon = document.querySelector('.sidebar__icon');
const closeBtn = document.querySelector('.sidebar__close');
const sidebar = document.querySelector('.sidebar');
const addToCart = document.querySelectorAll('.arrivals__item-add');

addToCart.forEach(function (item) {
    item.addEventListener('click', function () {
        const size = this.parentElement.querySelector('.arrivals__item-overlay--submit');
        const close = this.parentElement.querySelector('.arrivals__item-overlay-close');
        console.log('close', close);
        console.log('size', size);
        size.classList.add('show');
    });
});

sidebarIcon.addEventListener('click', () => {
    sidebar.classList.add('show');
});
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
});
