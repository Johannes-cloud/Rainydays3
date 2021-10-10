const myButton = document.querySelector("button")
const cart = document.querySelector(".cart")
const cartTotal = document.querySelector(".cart-total")
let total = 0;
let count = 0;

myButton.onclick = function(){
    count++;
    total += 50;
    cart.style.display = "block";
    cartTotal.innerHTML = `Items: ${count} Total: $ ${total}`;
    localStorage.setItem("total",total)
}