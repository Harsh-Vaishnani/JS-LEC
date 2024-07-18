let maindiv = document.querySelector(".container");
let viewCart = () => {
    window.location.href = "cart.html";
};
let fachdata = async () => {
    try {
        let data = await fetch("https://fakestoreapi.com/products");
        let products = await data.json();
        renderdata(products);
    } catch (error) {
        console.log(error);
    }
};

let renderdata = (Data) => {
    Data.forEach((ele) => {
        console.log(ele);
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h1");
        let price = document.createElement("h4");
        let Addbtn = document.createElement("button");
        Addbtn.style.borderStyle = "dashed";
        Addbtn.style.padding = "10px";
        Addbtn.style.fontSize = "16px";
        Addbtn.style.cursor = "pointer";
        Addbtn.addEventListener("click", () => addToCart(ele));
        Addbtn.innerText = "Add to Cart";
        price.style.color = "darkgreen";
        price.style.fontWeight = "lighter";
        price.style.fontSize = "20px";
        let category = document.createElement("h4");
        category.style.fontStyle = "italic";
        category.style.fontSize = "18px";
        img.src = ele.image;
        title.innerText = `Title: ${ele.title}`;
        price.innerText = `Price: $${ele.price}`;
        category.innerText = `Category: ${ele.category}`;
        div.append(img, title, price, category, Addbtn);
        maindiv.append(div);
    });
};

let updateCartCount = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").innerText = cart.length;
};

fachdata();
updateCartCount();
let addToCart = (productToAdd) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let found = cart.find((product) => product.id === productToAdd.id);

    if (found) {
        found.quantity = found.quantity ? found.quantity + 1 : 2;
    } else {
        cart.push({ ...productToAdd, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added");
    updateCartCount();
};