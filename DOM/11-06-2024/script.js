document.addEventListener('DOMContentLoaded', () => {
    // Sample products
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    const productContainer = document.querySelector('.product-list');
    const cartContainer = document.querySelector('.cart-list');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display products
    if (productContainer) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productElement);
        });
    }

    // Display cart items
    if (cartContainer) {
        updateCartDisplay();
    }

    // Form validations and user data handling
    document.getElementById('signupForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.email === email)) {
            alert('User already exists');
        } else {
            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful');
            window.location.href = 'login.html';
        }
    });

    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            alert('Login successful');
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password');
        }
    });

    document.getElementById('logoutButton')?.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        alert('Logout successful');
        window.location.href = 'index.html';
    });

    window.addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart');
    };

    window.removeFromCart = (productId) => {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    };

    function updateCartDisplay() {
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>$${item.price} x ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
});