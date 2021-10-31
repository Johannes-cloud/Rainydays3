const baseUrl = "https://e-thesis.casa/wp-json/wc/store/products";
const productContainer = document.querySelector(".products")

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += `<a href="details.html?id=${product.id}" class="card">
        <div class="product"><h2>${product.name}</h2>
        <div class="product-image" style="background-image: url(${product.images[0].src});"></div>
        <div class="short-description"><h3>${product.short_description}</h3>
        <div class="price">${product.prices.price} ${product.prices.currency_symbol}</div>
        </a>`
    });
}

getProducts(baseUrl);