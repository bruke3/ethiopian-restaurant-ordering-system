const menuContainer =
document.getElementById("menu-container");

const cartItems =
document.getElementById("cart-items");

const totalText =
document.getElementById("total");

const placeOrderBtn =
document.getElementById("place-order-btn");

const menu = [

    {
        name: "🍽️ Doro Wat",
        price: 12
    },

    {
        name: "🥩 Tibs",
        price: 10
    },

    {
        name: "🍖 Kitfo",
        price: 11
    },

    {
        name: "🫓 Injera",
        price: 3
    },

    {
        name: "🍯 Tej",
        price: 5
    }

];

const cart = [];

function renderMenu(){

    menuContainer.innerHTML = "";

    menu.forEach(food => {

        const card =
        document.createElement("div");

        card.classList.add("menu-item");

        card.innerHTML = `
            <h3>${food.name}</h3>
            <p>$${food.price}</p>
            <button>Add To Order</button>
        `;

        const button =
        card.querySelector("button");

        button.addEventListener("click", () => {

            addToCart(food);

        });

        menuContainer.appendChild(card);

    });

}

function addToCart(food){

    const existingItem =
    cart.find(item =>
        item.name === food.name
    );

    if(existingItem){

        existingItem.quantity++;

    }else{

        cart.push({

            name: food.name,

            price: food.price,

            quantity: 1
        });
    }

    updateCart();
}

function updateCart(){

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        const subtotal =
        item.price * item.quantity;

        total += subtotal;

        const itemDiv =
        document.createElement("div");

        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
            ${item.name}
            x${item.quantity}
            - $${subtotal}
        `;

        cartItems.appendChild(itemDiv);

    });

    totalText.textContent =
    `Total: $${total}`;
}

placeOrderBtn.addEventListener("click", () => {

    if(cart.length === 0){

        alert(
            "Please add items first."
        );

        return;
    }

    alert(
        "🎉 Order placed successfully!"
    );

    cart.length = 0;

    updateCart();
});

renderMenu();