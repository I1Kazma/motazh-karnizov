const swiper = new Swiper('.main-banner__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

let header__layout__bottom = document.querySelector("#header__layout__bottom")
let menu__close = document.querySelector("#menu__close")
let menu__open = document.querySelector("#menu__open")

menu__open.onclick = () => {
    header__layout__bottom.classList.toggle("open")
}

menu__close.onclick = () => {
    header__layout__bottom.classList.remove("open")
}

