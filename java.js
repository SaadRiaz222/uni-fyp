document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: 'Earbuds',
            price: 29.99,
            image: 'earbuds.jpeg'
        },
        {
            id: 2,
            name: 'Mobile',
            price: 49.99,
            image: 'mobile.jpeg'
        },
        {
            id: 3,
            name: 'Power bank',
            price: 19.99,
            image: 'power bank.jpeg'
        },
        {
            id: 4,
            name: 'Watches',
            price: 19.99,
            image: 'watch.jpeg'
        }
    ];

    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;

        productsContainer.appendChild(productElement);
    });
});
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(cart);
}

document.addEventListener('DOMContentLoaded', function() {
    const products = [
        // Product data as before
    ];

    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button data-id="${product.id}">Add to Cart</button>
        `;

        productsContainer.appendChild(productElement);

        productElement.querySelector('button').addEventListener('click', () => {
            addToCart(product);
        });
    });
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    showSlides();
}
