const cartTable = document.getElementById("cartTable"); 
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach((product, index) => {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${product.title}</td>
        <td>$${product.price}</td>
        <td><input type="number" value=${product.qty} data-index=${index}></td>
        <td>$${product.price * product.qty}</td>
        <td><button data-index=${index}>Remove</button></td>
    `;

    cartTable.appendChild(row);
});

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", event => {

        const index = event.target.dataset.index;

        cart.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();

    });

});

document.querySelectorAll("input[type='number']").forEach(input => {

    input.addEventListener("change", event => {

        const index = event.target.dataset.index;

        const newQty = Number(event.target.value);

        cart[index].qty = newQty;

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();

    });

});

function totalPrice() {
    const total = document.getElementById("total");
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const value = currentCart.reduce((sum, product) => {
        return sum + (product.price * product.qty);
    }, 0);

    total.innerHTML = `<b>Total price: </b>$${value.toFixed(2)}`;
}

totalPrice();