import './App.css'
import { useState } from "react";

function App() {

  const products = [
    {
      id: 1,
      name: "Campus Men's Sneakers",
      image:"https://media.istockphoto.com/id/1382165903/photo/white-sport-sneaker-on-a-red-gradient-background-woman-and-mens-fashion-sport-shoe-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=pkEFQJQto7PkocxF_0TyQ-XrEHeVJzxnCCXVm_8pnXg=",
      price: 150,
    },
    {
      id: 2,
      name: "Asian Women's Sneakers",
      image:"https://media.istockphoto.com/id/1407127836/photo/white-sneaker-with-colored-accents-on-a-green-gradient-background-mens-fashion-sport-shoe-air.webp?a=1&b=1&s=612x612&w=0&k=20&c=o6TdZgRCxTavKMPPz7CGlMD37vUblQ5bA0Xr65VcEXc=",
      price: 175,
    },
    {
     id: 3,
      name: "Campus Men's Shoes",
      image:"https://media.istockphoto.com/id/1382165885/photo/white-sport-sneaker-on-a-blue-gradient-background-woman-and-mens-fashion-sport-shoe-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=XLNJSlObqfxvQyN2WsWlZtHpkrvum9QT4CxDdIcx59M=",
      price: 250,
    },
    {
      id: 4,
      name: "Campus Women's Shoes",
      image:"https://media.istockphoto.com/id/2284860732/photo/one-stylish-sneaker-in-air-on-gradient-background-space-for-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=T4oEzLtk2mikXb05SXjK0tcSO6Muxxle5VHMrSrAJXA=",
      price: 275,
    },
    {
     id: 5,
      name: "Campus Men's best Sneakers",
      image:"https://media.istockphoto.com/id/1382165903/photo/white-sport-sneaker-on-a-red-gradient-background-woman-and-mens-fashion-sport-shoe-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=pkEFQJQto7PkocxF_0TyQ-XrEHeVJzxnCCXVm_8pnXg=",
      price: 120,
    },
    {
      id: 6,
      name: "Asian Women's Sneakers",
      image:"https://media.istockphoto.com/id/1407127836/photo/white-sneaker-with-colored-accents-on-a-green-gradient-background-mens-fashion-sport-shoe-air.webp?a=1&b=1&s=612x612&w=0&k=20&c=o6TdZgRCxTavKMPPz7CGlMD37vUblQ5bA0Xr65VcEXc=",
      price: 175,
    },
    {
     id: 7,
      name: "Campus Men's Shoes",
      image:"https://media.istockphoto.com/id/1382165885/photo/white-sport-sneaker-on-a-blue-gradient-background-woman-and-mens-fashion-sport-shoe-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=XLNJSlObqfxvQyN2WsWlZtHpkrvum9QT4CxDdIcx59M=",
      price: 250,
    },
    {
      id: 8,
      name: "Campus Women's Shoes",
      image:"https://media.istockphoto.com/id/2284860732/photo/one-stylish-sneaker-in-air-on-gradient-background-space-for-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=T4oEzLtk2mikXb05SXjK0tcSO6Muxxle5VHMrSrAJXA=",
      price: 275,
    },
  ];

  const [cart, setCart] = useState([]);

   // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Increase quantity
const increment = (id) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

// Decrease quantity without going below 1
const decrement = (id) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};

// Remove product
const removeFromCart = (id) => {
  setCart((prevCart) =>
    prevCart.filter((item) => item.id !== id)
  );
};

  // Calculate cart total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

// Calculate total quantity of products
const cartCount = cart.reduce(
  (sum, item) => sum + item.quantity,
  0
);

  return (
    <>
    {/* NAVIGATION */}
    <header className="header">
        <div className="container">
            <nav className="navbar">
                <div className="logo">
                  <h1>♞</h1>
                </div>

                <ul className="nav_links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">categories</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav> 
        </div>
    </header>

    <main className="main-content" id="home">

      {/* Products */}
      <section className="products" id="categories">
         {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
              src={product.image}
              alt={product.name}
              className="product-image"
              height = "40"
            />

              <div className="product_details">
                <h3>{product.name}</h3>

              <p className="product-price">
                ${product.price}
              </p>

              <button
                className="add-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              </div>
              
            </div>
          ))}
      </section>

      {/* Shopping cart */}
        <section className="cart">
          <h3>Cart</h3>

          {cart.length === 0 ? (
            <p className="empty-cart">
              Your cart is empty.
            </p>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name}/>
                  <span>
                    {item.name} <br/>
                     ${item.price}
                  </span>
                    <button
                      type="button"
                      class="decrement"
                      onClick={() => decrement(item.id)}
                      disabled={item.quantity === 1}
                      aria-label={`Decrease ${item.name} quantity`}
                      >
        -
                    </button>
                    <span class="value">{item.quantity}</span>

                    <button
                      type="button"
                      class="increment"
                      onClick={() => increment(item.id)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      
                      class="remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      x
                    </button>
              
                </div>
              ))}
            </div>
          )}

          <h3 className="total">
            Total: ${total.toFixed(2)}
          </h3>
        </section>
    </main>

    </>
  )
}

export default App


