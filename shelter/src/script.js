//burger

(function () {
    const burgerItem = document.querySelector(".burger");
    const menu = document.querySelector(".header__nav");
    const closeMenu = document.querySelector(".header_nav_close");

    burgerItem.addEventListener('click', () => {
        menu.classList.add("header__nav_active");
    })
    closeMenu.addEventListener('click', () => {
        menu.classList.remove("header__nav_active");
    })

}())