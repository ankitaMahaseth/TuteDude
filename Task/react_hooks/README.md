# React Sneakers Shopping Cart (REACT JS HOOKS)

A simple and responsive sneakers shopping cart application built using React.js. This project displays a collection of sneakers and allows users to add products to their cart, manage product quantities, remove items, and calculate the total price dynamically.

## 🚀 Features

- **Product Listing:** Display four sneakers with product images, names, and prices.
- **Add to Cart:** Add products to the shopping cart.
- **Quantity Management:** Increase or decrease the quantity of each product.
- **Duplicate Product Handling:** Adding an existing product increases its quantity instead of creating a duplicate cart entry.
- **Remove Items:** Remove products from the cart.
- **Dynamic Cart Total:** Automatically calculate the total price based on product prices and quantities.
- **Cart Quantity:** Track the total number of products in the cart.
- **Empty Cart Message:** Display a message when the cart is empty.
- **Responsive UI:** Style the application using CSS for a clean shopping experience.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React `useState` Hook
- JSX

## 📂 Project Structure

```text
sneakers-shopping-cart/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

_Note: Your actual folder structure may differ depending on your project setup._

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project directory

```bash
cd sneakers-shopping-cart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

For a Vite React project, run:

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## 🛒 How It Works

### Product Listing

The application uses a JavaScript array to store product information, including:

- Product ID
- Product name
- Product image
- Product price

The `map()` method renders each product dynamically.

### Add to Cart

The `addToCart()` function checks whether a product already exists in the cart.

- If the product exists, its quantity increases by one.
- If the product is new, it is added with a quantity of one.

### Quantity Management

- `increment(id)`: Increases the quantity of a selected product.
- `decrement(id)`: Decreases the quantity without allowing it to fall below one.
- `removeFromCart(id)`: Removes the selected product from the cart.

### Total Price Calculation

The `reduce()` method calculates the total price:

```javascript
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
```

### Cart Count

The total number of items in the cart is calculated using:

```javascript
const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
```

## 👩‍💻 Author

**Ankita Mahaseth**

**MERN Stack Developer**

This project was created as a hands-on practice project to improve React.js fundamentals and shopping cart functionality.

## 📄 License

This project is available for educational and personal practice. Add a license file if you plan to distribute it publicly.
