const productContainer = document.querySelector(".product");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://e-thesis.casa/wp-json/wc/store/products/" + id;

console.log(url);

async function getProduct() {

    try {
        const response = await fetch(url);
        const products = await response.json();

        console.log(products);

        createHtml(products);
      
    }
    catch(error) {
        console.log(error);
        productContainer.innerHTML = message("error", error);
    }
    
}

getProduct();

function createHtml(product) {
    productContainer.innerHTML = `
    <h1>${product.name}</h1>
    <div class="product-image" style="background-image: url('${product.images[0].src}')"></div>
    <div class="details-description">${product.description}</div>
    <div class="details-price">${product.prices.price} ${product.prices.currency_symbol}<div>`;
}