# 🧺 Laundry App — Service Booking Web App

A modern and responsive **Laundry Service Booking Web App** built using **HTML, CSS, and JavaScript DOM manipulation**.

The application allows users to browse laundry services, add services to a cart, view the total amount, validate booking details, and submit a service booking request.

---

## 📌 Project Overview

The Laundry App provides a simple interface for customers to book laundry services online.

Users can:

- View available laundry services
- Add services to the cart
- Remove services from the cart
- View selected services
- Calculate the total booking amount
- Enter booking information
- Validate customer details
- Book a laundry service
- Subscribe to the newsletter
- View company information and contact details

---

## ✨ Features

### 🏠 Home / Hero Section

- Attractive landing section
- Laundry service introduction
- Call-to-action button
- Laundry-related image
- "Book a service today" button

### 📊 Service Overview

Displays basic business statistics:

- `15+` Laundry Services
- `240+` Happy Customers
- `2+ Yrs` Experience

### 🧺 Laundry Services

The services section displays available laundry services dynamically using JavaScript.

Example services include:

| Service  | Price |
| -------- | ----: |
| Cleaning |  ₹200 |
| Repair   |  ₹500 |
| Washing  |  ₹300 |
| Painting |  ₹800 |
| Plumbing |  ₹600 |

Users can add services to their cart.

### 🛒 Shopping Cart

The cart provides:

- Selected service list
- Serial number
- Service name
- Service price
- Total amount
- Empty cart message
- Remove service functionality

### 📝 Booking Form

The booking form collects:

- Full Name
- Email ID
- Phone Number

It also provides client-side validation messages for invalid or missing information.

### ✅ Booking Status

The application displays:

- Error message when no service has been selected
- Validation errors
- Successful booking message

### ⭐ Quality Features

The application highlights:

- Premium Service
- Quick Support
- Hassle-Free Delivery
- Affordable Prices

### 📧 Newsletter Subscription

Users can subscribe to the newsletter by providing:

- Full Name
- Email Address

### 📱 Footer

The footer contains:

- Logo
- About Us
- Important Links
- Contact information
- Email
- Phone number
- Location
- Social media icons

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- JavaScript DOM Manipulation

### External Resources

- Google Material Symbols
- Local images
- Google Fonts

---

## 📂 Project Structure

```text
Laundry-App/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── email.js
│
├── assets/
│   └── images/
│       ├── laundry_img.jpg
│       ├── premium_service.png
│       ├── quick_support.png
│       ├── delivery.jpg
│       ├── price.jpg
│       ├── instagram.png
│       ├── facebook.png
│       ├── twitter.png
│       └── youtube.png
│
└── README.md
```

## 🔗 JavaScript Integration

The HTML file loads two JavaScript modules:

```html
<script type="module" src="js/script.js"></script>
<script type="module" src="js/email.js"></script>
```

### `script.js`

Responsible for functionality such as:

- Loading service data
- Displaying services
- Add to cart
- Remove from cart
- Cart updates
- Total amount calculation
- Booking validation
- Booking success/error messages
- DOM manipulation

### `email.js`

Responsible for newsletter or email-related functionality.

---

## 🎨 CSS Integration

The application uses an external stylesheet:

```html
<link rel="stylesheet" href="css/style.css" />
```

## 🚀 How to Run the Project

### Option 1 — VS Code Live Server

1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The application will open in your browser.

Example:

```text
http://127.0.0.1:5500/index.html
```

## 🧪 Application Flow

### Step 1 — View Services

The user opens the Laundry App and sees the available services.

### Step 2 — Add Service

The user clicks the **Add** button.

```text
Service
   ↓
Add to Cart
   ↓
Cart Updated
```

### Step 3 — Review Cart

The selected service appears in the cart.

The total amount is automatically updated.

### Step 4 — Enter Booking Details

The user enters:

```text
Full Name
Email
Phone Number
```

### Step 5 — Validate Form

JavaScript checks the entered information.

If the information is invalid, an appropriate error message is displayed.

### Step 6 — Book Service

After selecting at least one service and entering valid customer information, the user can submit the booking.

### Step 7 — Success Message

A successful booking message is displayed to the user.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes.
