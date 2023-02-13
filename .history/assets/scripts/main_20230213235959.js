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
const shoppingApp = () => {
    const moreProductDatas = [
        {
            id: 1,
            name: 'Naminos Dementus A Milance - Pattern   ',
            thumbnail: './assets/images/products/product-1.jpg',
            status: 'sodling',
            startPrice: 86.0,
            endPrice: 86.0,
            colors: ['blue', 'cyan', 'gray', 'black'],
        },
        {
            id: 2,
            name: 'Naminos Dementus A Milance - Pattern ',
            thumbnail: './assets/images/products/product-2.jpg',
            status: 'sodling',
            startPrice: 102.0,
            endPrice: 150.0,
            colors: ['yellow', 'blue', 'white', 'black'],
        },
        {
            id: 3,
            name: 'Naminos Dementus A Milance - Pattern   ',
            thumbnail: './assets/images/products/product-3.jpg',
            status: 'sodling',
            startPrice: 50.0,
            endPrice: 96.0,
            colors: ['blue', 'yellw', 'white', 'black'],
        },
        {
            id: 4,
            name: 'Naminos Dementus A Milance - Pattern   ',
            thumbnail: './assets/images/products/product-4.jpg',
            status: 'sodling',
            startPrice: 60.0,
            endPrice: 90.0,
            colors: ['back', 'white'],
        },
    ];
    const sidebarIcon = document.querySelector('.sidebar__icon');
    const closeBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');
    const addToCart = document.querySelectorAll('.arrivals__item-add');
    const showMoreBtn = document.querySelector('.arrivals__show-more');
    const listProducts = document.querySelector('.arrivals__list');
    console.log('shoppingApp  listProducts', listProducts);
    //show more
    showMoreBtn.addEventListener('click', () => {
        moreProductDatas.forEach((item) => {
            const itemWrapper = document.createElement('div');
            itemWrapper.setAttribute('class', 'col-12 col-md-6 col-lg-3');
            console.log('showMoreBtn.addEventListener  itemWrapper', itemWrapper);
            listProducts.appendChild(itemWrapper);
        });
    });

    addToCart.forEach(function (item) {
        item.addEventListener('click', function () {
            const addSizeBtns = document.querySelectorAll('.arrivals__item-overlay--submit');
            console.log('addSizeBtns', addSizeBtns);
            addSizeBtns.forEach((item) => {
                item.classList.remove('show');
            });
            const size = this.parentElement.querySelector('.arrivals__item-overlay--submit');
            const close = this.parentElement.querySelector('.arrivals__item-overlay-close');
            console.log('close', close);
            console.log('size', size);
            size.classList.add('show');

            close.addEventListener('click', function () {
                size.classList.remove('show');
            });
        });
    });

    sidebarIcon.addEventListener('click', () => {
        sidebar.classList.add('show');
    });
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('show');
    });
};

shoppingApp();
