# 👟 Shoe Shopping Website Using React Context API

A responsive Shoe Shopping Website built using React.js, React Router DOM, and Tailwind CSS. This project allows users to browse shoes, add products to their shopping cart, manage quantities, and proceed to checkout with different payment options.

## 🚀 Features

### 1. Product Listing

- Display multiple shoe products.
- Product image, name, and price.
- Add products to the shopping cart.
- Responsive product grid layout.

### 2. Shopping Cart

- Add products to cart.
- Increase and decrease product quantities.
- Remove products from the cart.
- Display total cart quantity.
- Calculate the total price dynamically.
- Display an empty cart message when no products are available.

### 3. Local Storage

- Store cart data in browser localStorage.
- Retrieve saved cart data when the application loads.
- Maintain cart data after refreshing the page.
- Clear cart data after order submission.

### 4. Payment Page

- Display all cart products in the order summary.
- Show individual product prices and quantities.
- Calculate the final order amount.
- Provide two payment options:
  - Credit Card
  - Cash on Delivery (COD)

### 5. Payment Form

- Card Holder Name
- Card Number
- Expiry Date
- CVV
- Conditional rendering of credit card details.
- Hide payment details after order submission.
- Display order confirmation message.

### 6. Navigation

- React Router DOM for page navigation.
- Navigate from the shopping cart to the payment page.
- Return to shopping option.
- Disable Proceed To Payment navigation when the cart is empty.

### 7. Responsive Design

- Tailwind CSS styling.
- Responsive product cards.
- Flexible shopping cart layout.
- Responsive payment and order summary sections.

---

## 🛠️ Technologies Used

| Technology        | Purpose                       |
| ----------------- | ----------------------------- |
| React.js          | Frontend development          |
| JavaScript (ES6+) | Application logic             |
| Tailwind CSS      | Styling and responsive design |
| React Router DOM  | Navigation                    |
| React Hooks       | State management              |
| localStorage      | Persistent cart storage       |
| HTML5             | Application structure         |

---

## 📂 Project Structure

```text
shoe-shopping-website/
│
├── public/
│
├── src/
│   │
│   ├── context/
|   |   ├── CartContext.jsx
│   │
│   ├── components/
|   |      ├──Home/
|   │      |   ├── Home.jsx
|   │      ├──Footer/
|   │      |   ├── Footer.jsx
|   |      ├──Header/
|   │      |   ├── Header.jsx
|   │      ├──Payment/
|   │          ├── Payment.jsx
│   ├── hoc/
|   |   ├── Layout.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation and Setup

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate to Project Folder

```bash
cd shoe-shopping-website
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Install React Router DOM

```bash
npm install react-router-dom
```

### Step 5: Start Development Server

```bash
npm run dev
```

Open the local development URL displayed in your terminal.

---

## 🛒 Application Workflow

1. User visits the home page.
2. User browses available shoes.
3. User clicks Add To Cart.
4. Selected products appear in the shopping cart.
5. User can increase, decrease, or remove products.
6. Cart data is saved in localStorage.
7. User clicks Proceed To Payment.
8. Payment page displays the order summary.
9. User selects Credit Card or Cash on Delivery.
10. User submits the order.
11. Cart data is cleared from localStorage.
12. Order confirmation message is displayed.

---

## 💡 React Concepts Practiced

- Functional Components
- useState Hook
- useEffect Hook
- Conditional Rendering
- Array map() Method
- Array filter() Method
- Array reduce() Method
- Event Handling
- Controlled Components
- React Router DOM
- localStorage
- Dynamic CSS Classes
- Form Handling
- State Management

---

## ⚠️ Important Note

This project currently demonstrates frontend cart and checkout functionality.

Credit card submission and Cash on Delivery are simulated. No actual payment is processed, and no order is persisted to a backend.

Real payment processing requires a secure backend and payment gateway integration.

---

## 👩‍💻 Author

**Ankita Mahaseth**

MERN Stack Developer

Skills: React.js | Node.js | Express.js | MongoDB | JavaScript | Tailwind CSS

---
