let params = new URLSearchParams(document.location.search);
const productId = params.get("id");
const details = document.getElementById("productDetails");
let productPrice = "";
let productTitle = "";

fetch('https://fakestoreapi.com/products/'+productId)
  .then(response => response.json())
  .then(data => {

    details.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <img src=${data.image}>
        <p><b>Price:</b> $${data.price}</p>
    `;

    productTitle = data.title;
    productPrice = data.price;

  });

document.getElementById("addToCartBtn").addEventListener("click", () => {
    const qty = document.getElementById("quantity").value;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // TODO:
    // create a JSON object representing the product
    // add id, title, price, qty
    let obj = {id: productId, title: productTitle, price: productPrice, qty: qty};
    //const productJSON = JSON.stringify(obj);

    // example structure
    // {
    //   id: product.id,
    //   title: product.title,
    //   price: product.price,
    //   qty: qty
    // }

    // TODO:
    // push the item into the cart array
    cart.push(obj);

    // TODO:
    // save the cart into local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // TODO:
    // notify the user of successful operation using an alert
    alert(`The product ${productTitle} added to cart!`);

});