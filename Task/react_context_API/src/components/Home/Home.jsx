import { useState,useEffect } from "react";
import { Link } from 'react-router-dom'

function Home() {
   const products = [
    {
      id: 1,
      name: "Campus Men's Sneakers",
      src:"https://media.istockphoto.com/id/1382165903/photo/white-sport-sneaker-on-a-red-gradient-background-woman-and-mens-fashion-sport-shoe-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=pkEFQJQto7PkocxF_0TyQ-XrEHeVJzxnCCXVm_8pnXg=",
      price: 150,
    },
    {
      id: 2,
      name: "Asian Women's Sneakers",
      src:"https://media.istockphoto.com/id/1407127836/photo/white-sneaker-with-colored-accents-on-a-green-gradient-background-mens-fashion-sport-shoe-air.webp?a=1&b=1&s=612x612&w=0&k=20&c=o6TdZgRCxTavKMPPz7CGlMD37vUblQ5bA0Xr65VcEXc=",
      price: 175,
    },
    {
     id: 3,
      name: "Campus Men's Shoes",
      src:"https://media.istockphoto.com/id/1382165885/photo/white-sport-sneaker-on-a-blue-gradient-background-woman-and-mens-fashion-sport-shoe-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=XLNJSlObqfxvQyN2WsWlZtHpkrvum9QT4CxDdIcx59M=",
      price: 250,
    },
    {
      id: 4,
      name: "Campus Women's Shoes",
      src:"https://media.istockphoto.com/id/2284860732/photo/one-stylish-sneaker-in-air-on-gradient-background-space-for-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=T4oEzLtk2mikXb05SXjK0tcSO6Muxxle5VHMrSrAJXA=",
      price: 275,
    },
    {
     id: 5,
      name: "Campus Men's Sneakers",
      src:"https://media.istockphoto.com/id/1382165903/photo/white-sport-sneaker-on-a-red-gradient-background-woman-and-mens-fashion-sport-shoe-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=pkEFQJQto7PkocxF_0TyQ-XrEHeVJzxnCCXVm_8pnXg=",
      price: 120,
    },
    {
      id: 6,
      name: "Asian Women's Sneakers",
      src:"https://media.istockphoto.com/id/1407127836/photo/white-sneaker-with-colored-accents-on-a-green-gradient-background-mens-fashion-sport-shoe-air.webp?a=1&b=1&s=612x612&w=0&k=20&c=o6TdZgRCxTavKMPPz7CGlMD37vUblQ5bA0Xr65VcEXc=",
      price: 175,
    },
    {
     id: 7,
      name: "Campus Men's Shoes",
      src:"https://media.istockphoto.com/id/1382165885/photo/white-sport-sneaker-on-a-blue-gradient-background-woman-and-mens-fashion-sport-shoe-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=XLNJSlObqfxvQyN2WsWlZtHpkrvum9QT4CxDdIcx59M=",
      price: 250,
    },
    {
      id: 8,
      name: "Campus Women's Shoes",
      src:"https://media.istockphoto.com/id/2284860732/photo/one-stylish-sneaker-in-air-on-gradient-background-space-for-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=T4oEzLtk2mikXb05SXjK0tcSO6Muxxle5VHMrSrAJXA=",
      price: 275,
    },
    {
      id: 9,
      name: "Puma Men's Shoes",
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=612",
      price: 320,
},
  ];


const [cart, setCart] = useState(() => 
  {
    try {
    const savedData = localStorage.getItem("cartData");
    return savedData ? JSON.parse(savedData) : [];
  } catch (error) {
    console.error("Failed to load cart data:", error);
    return [];
  }
  }
);

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

 // Save Cart Data to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
    
<main className="m-5 flex flex-col items-start gap-6 lg:flex-row">

  {/* Products Section */}
  <section className="w-full min-w-0 lg:w-2/3">
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="group overflow-hidden rounded-xl shadow-md"
        >
          <img
            src={product.src}
            alt={product.name}
            loading="lazy"
            className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
          />

          <div className="p-3 text-center">
            <p className="text-lg font-bold">{product.name}</p>
            <p className="font-semibold">${product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="my-2 rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Shopping Cart */}
  <section className="flex h-[calc(100vh-6rem)] w-full shrink-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:sticky lg:top-20 lg:w-1/3">

    {/* Fixed Header */}
    <div className="shrink-0 border-b border-gray-200 px-4 py-3">
      <h2 className="text-center text-2xl font-bold text-gray-800">
        Cart ({cartCount})
      </h2>
    </div>

    {/* Scrollable Cart Body */}
    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
      {cart.length === 0 ? (
        <div className="grid align-center justify-center align-center mt-10">
          <span className="mb-3 text-6xl" role="img" aria-label="Cart">
            🛒
          </span>
          <p className="py-8 text-center text-gray-500">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 border-b border-gray-100 pb-4"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-14 w-14 shrink-0 rounded-lg object-cover"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-gray-800">
                  {item.name}
                </p>
                <p className="text-sm text-gray-600">
                  ${Number(item.price).toFixed(2)}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded border disabled:opacity-40"
                  onClick={() => decrement(item.id)}
                  disabled={item.quantity === 1}
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  -
                </button>

                <span className="w-5 text-center text-sm">
                  {item.quantity}
                </span>

                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded bg-indigo-600 text-white hover:bg-indigo-700"
                  onClick={() => increment(item.id)}
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>

                <button
                  type="button"
                  className="ml-1 px-1 text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Fixed Footer */}
    <div className="shrink-0 border-t border-gray-200 bg-white px-4 py-4 flex flex-col">
      <h3 className="text-center text-lg font-bold text-gray-900">
        Total: ${total.toFixed(2)}
      </h3>
       <button  >
          <Link  to={cart.length > 0 ? "/payment" : "#"} 
          className={`my-2 block rounded-lg px-5 py-2.5 text-center font-semibold text-white transition ${
                    cart.length === 0
                    ? "cursor-not-allowed bg-gray-400 opacity-60"
                    : "bg-indigo-600 hover:bg-indigo-700"
  }`}>Proceed To Payment</Link>
        </button>
    </div>

  </section>
</main>


    </>
  )
}

export default Home
