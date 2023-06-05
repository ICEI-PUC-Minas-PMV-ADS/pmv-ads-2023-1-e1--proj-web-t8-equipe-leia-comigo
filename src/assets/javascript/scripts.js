// Script para a barra de menu ficar mais escura no scroll down
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav__black');
    } else {
        nav.classList.remove('nav__black');
    }
});

// Script para mover o carrossel de atualidade 
const controls1 = document.querySelectorAll(".control1");
let currentItem1 = 0;
const items1 = document.querySelectorAll(".item1");
const maxitems1 = 6;

controls1.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft1 = control.classList.contains("arrow-left1");
        if (isLeft1) {
            currentItem1 -= 1;
        } else {
            currentItem1 += 1;
        }

        if (currentItem1 >= maxitems1) {
            currentItem1 = 0;
        }

        if (currentItem1 < 0) {
            currentItem1 = maxitems1 - 1;
        }

        items1[currentItem1].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
    });
});

// Script para mover o carrossel de ciencia 
const controls2 = document.querySelectorAll(".control2");
let currentItem2 = 0;
const items2 = document.querySelectorAll(".item2");
const maxitems2 = 6;

controls2.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft2 = control.classList.contains("arrow-left2");
        if (isLeft2) {
            currentItem2 -= 1;
        } else {
            currentItem2 += 1;
        }

        if (currentItem2 >= maxitems2) {
            currentItem2 = 0;
        }

        if (currentItem2 < 0) {
            currentItem2 = maxitems2 - 1;
        }

        items2[currentItem2].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
    });
});


// Script para mover o carrossel de Historia 
const controls3 = document.querySelectorAll(".control3");
let currentItem3 = 0;
const items3 = document.querySelectorAll(".item3");
const maxitems3 = 6;

controls3.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft3 = control.classList.contains("arrow-left3");
        if (isLeft3) {
            currentItem3 -= 1;
        } else {
            currentItem3 += 1;
        }

        if (currentItem3 >= maxitems3) {
            currentItem3 = 0;
        }

        if (currentItem3 < 0) {
            currentItem3 = maxitems3 - 1;
        }

        items3[currentItem3].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
    });
});

// Script para mover o carrossel de Saude 
const controls4 = document.querySelectorAll(".control4");
let currentItem4 = 0;
const items4 = document.querySelectorAll(".item4");
const maxitems4 = 6;

controls4.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft4 = control.classList.contains("arrow-left4");
        if (isLeft4) {
            currentItem4 -= 1;
        } else {
            currentItem4 += 1;
        }

        if (currentItem4 >= maxitems4) {
            currentItem4 = 0;
        }

        if (currentItem4 < 0) {
            currentItem4 = maxitems4 - 1;
        }

        items4[currentItem4].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
    });
});