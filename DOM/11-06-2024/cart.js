let maindiv = document.querySelector(".container");

let renderCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    maindiv.innerHTML = "";

    cart.forEach((product) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h1");
        let price = document.createElement("h4");
        let category = document.createElement("h4");
        let quantityDisplay = document.createElement("p");
        let removeBtn = document.createElement("button");
        let decreaseBtn = document.createElement("button");
        let increaseBtn = document.createElement("button");

        img.src = product.image;
        title.innerText = `Title: ${product.title}`;
        price.innerText = `Price: $${product.price}`;
        category.innerText = `Category: ${product.category}`;
        quantityDisplay.innerText = `Quantity: ${product.quantity}`;

        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", () => removeFromCart(product));

        decreaseBtn.innerText = "-";
        decreaseBtn.addEventListener("click", () =>
            updateQuantity(product, -1)
        );

        increaseBtn.innerText = "+";
        increaseBtn.addEventListener("click", () =>
            updateQuantity(product, 1)
        );

        div.append(
            img,
            title,
            price,
            category,
            quantityDisplay,
            decreaseBtn,
            increaseBtn,
            removeBtn
        );
        maindiv.append(div);
    });
};

let removeFromCart = (productToRemove) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let updatedCart = cart.filter(
        (product) => product.id !== productToRemove.id
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    renderCart();
};

let updateQuantity = (productToUpdate, change) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let updatedCart = cart
        .map((product) => {
            if (product.id === productToUpdate.id) {
                product.quantity += change;
            }
            return product;
        })
        .filter((product) => product.quantity > 0);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    renderCart();
};

renderCart();