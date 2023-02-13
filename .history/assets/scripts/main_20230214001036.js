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
    let moreProductDatas = [
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
            id: 1,
            name: 'Dinterdum Pretium Condimento - Pattern',
            thumbnail: './assets/images/products/product-1.jpg',
            status: 'sodling',
            startPrice: 86.0,
            endPrice: 86.0,
            colors: ['blue', 'cyan', 'gray', 'black'],
        },
        {
            id: 3,
            name: 'Magnis Darturien Metro Lacinis - Black ',
            thumbnail: './assets/images/products/product-3.jpg',
            status: 'sodling',
            startPrice: 50.0,
            endPrice: 96.0,
            colors: ['blue', 'yellw', 'white', 'black'],
        },
        {
            id: 4,
            name: 'Loremous Saliduar A Cosmopolito - Pattern',
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
            itemWrapper.innerHTML = `
                                    <div class="arrivals__item">
                                   
                                    <span class="arrivals__item-wish">
                                        <img
                                            src="./assets/images/buttons/wishlist.png"
                                            alt="wishlist"
                                        />
                                    </span>
                                    <div class="arrivals__item-thumbnail">
                                        <img
                                            class="arrivals-item-img"
                                            src="${item.thumbnail}"
                                            alt="product-1"
                                        />
                                        <div class="arrivals__item-overlay">
                                            <button class="btn btn-outline arrivals__item-add">
                                                ADD TO CART
                                            </button>
                                            <div class="arrivals__item-overlay--submit">
                                                <span class="arrivals__item-overlay-close">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        width="13px"
                                                        height="13px"
                                                    >
                                                        <image
                                                            x="0px"
                                                            y="0px"
                                                            width="13px"
                                                            height="13px"
                                                            xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAQAAADY4iz3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnAg0QDQtxZQ6SAAAATklEQVQY02XOQQIAEAhE0d9cxf3PODZRYhNeDbHABHOZEAb8AVg54QEQgoEJoLM5MXVW9sY70ele1G+LPOolf7FJBQ01Hy/UgIZqMS/GBi/5Fz32FNFfAAAAAElFTkSuQmCC"
                                                        />
                                                    </svg>
                                                </span>
                                                <span class="arrivals__item-overlay-current-size">
                                                    Size <strong>xs</strong>
                                                </span>
                                                <ul class="arrivals__item-overlay-sizes">
                                                    <li class="arrivals__item-overlay-item">xs</li>
                                                    <li class="arrivals__item-overlay-item">s</li>
                                                    <li class="arrivals__item-overlay-item">m</li>
                                                    <li class="arrivals__item-overlay-item">l</li>
                                                    <li class="arrivals__item-overlay-item">2xl</li>
                                                </ul>
                                                <button class="btn btn-outline">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" class="arrivals__item-link">
                                        <div class="arrivals__item-body">
                                            <span class="arrivals__item-status">${
                                                item.status
                                            }</span>
                                            <h4 class="arrivals__item-name">
                                                ${item.name}
                                            </h4>
                                            <span class="arrivals__item-price"
                                                >$${item.startPrice} - $${item.endPrice}</span
                                            >
                                            <div class="arrivals__item-colors">
                                            ${item.colors.map(
                                                (color) =>
                                                    `
                                                         <div class="pick-color">
                                                        <span class="pick-color-inner ${color}"></span>
                                                    </div>
                                                    `
                                            )}
                                               
                                                
                                            </div>
                                        </div>
                                    </a>
                                </div>
            `;
            listProducts.appendChild(itemWrapper);
            moreProductDatas = [];
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
