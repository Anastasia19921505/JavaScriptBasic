"use strict"

let product, img, title, price, button;
let carts = [];

// массив с продуктами
let products = [
    {
        name: "Гарри Поттер",
        img: "Harry.jpg",
        price: 1500,
        id: 1
    },
    {
        name: "Стивен Кинг. Позже",
        img: "King.jpg",
        price: 600,
        id: 2
    },
    {
        name: 'Ли Мие. "Магазин снов" мистера Талергута',
        img: "li.jpg",
        price: 300,
        id: 3
    },
    {
        name: 'Каиу Сираи. Обещанная страна грез',
        img: "Sarai.jpg",
        price: 230,
        id: 4
    }
]

let wrap = document.querySelector("div");
let sum = 0; // цена заказа
let basket = document.querySelector("section");
let basketPrice = document.createElement("p");
basketPrice.classList.add("basketPrice");
basketPrice.innerHTML = "<span>" + sum + "</span>";
basket.append(basketPrice);


// создаем массив с карточками
for (let x of products) {

    product = document.createElement("section");
    img = document.createElement("img");
    title = document.createElement("h1");
    price = document.createElement("p");
    button = document.createElement("button");
    img.setAttribute("src", x.img);
    button.innerHTML = "Купить";
    button.setAttribute("id", x.id);
    button.classList.add("btnBuy");
    button.addEventListener('click', productBuy);
    product.setAttribute("id", x.id);
    title.innerHTML = x.name;
    price.innerHTML = x.price;
    price.classList.add("price");
    product.append(img, title, price, button);
    product.classList.add("product");
    carts.push(product);
}



wrap.append(carts[0], carts[1], carts[2]);

let btnBack = document.getElementById('back');
let btnForward = document.getElementById('forward');

// Кнопка назад. Убирает первый элемент, добавляет новый в конец
btnBack.onclick = function () {
    let productDelete = document.getElementsByClassName("product");
    let number = +productDelete[0].getAttribute('id');
    if (number <= (carts.length - 3)) {
        wrap.removeChild(productDelete[0]);
        wrap.append(carts[number + 2]);
    } else {
        wrap.removeChild(productDelete[0]);
        wrap.append(carts[number - carts.length + 2]);
    }
}

// Кнопка вперед. Убирает последний элемент, добавляет новый в начало
btnForward.onclick = function () {
    let productDelete = document.getElementsByClassName("product");
    let number = +productDelete[2].getAttribute('id');
    if (number > 3) {
        wrap.removeChild(productDelete[2]);
        wrap.insertBefore(carts[number - carts.length], wrap.children[0]);
    } else {
        wrap.removeChild(productDelete[2]);
        wrap.insertBefore(carts[number], wrap.children[0]);
    }

}

function productBuy() {
    let nubmberProductBuy = this.id;
    sum += products[nubmberProductBuy - 1].price;
    basketPrice.innerHTML = sum;
}





