import { showBookingSuccess } from "./email.js";

let serviceData = [
  {
    serviceName: "Cleaning",
    servicePrice: 200,
    serviceImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    serviceName: "Repair",
    servicePrice: 500,
    serviceImage:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189",
  },
  {
    serviceName: "Washing",
    servicePrice: 300,
    serviceImage:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
  },
  {
    serviceName: "Painting",
    servicePrice: 800,
    serviceImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828",
  },
  {
    serviceName: "Plumbing",
    servicePrice: 600,
    serviceImage:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39",
  },
];

//  SELECT DOM ELEMENTS

const cartItems = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");

export const bookNowBtn = document.getElementById("bookNowBtn");
const errorMessage = document.getElementById("errorMessage");
const infoMessage = document.getElementById("infoMessage");

const serviceDataContainer = document.getElementById("service-data");

// CART
export let cart = [];

// DISPLAY SERVICE
function displayServiceData() {
  serviceDataContainer.innerHTML = `
    <table class="service-table">
    <tbody>
        ${serviceData
          .map(function (item, index) {
            // Check whether this service is already in cart
            const isAdded = cart.some(function (cartItem) {
              return cartItem.name === item.serviceName;
            });

            return `
              <tr>
                <td>
                  <img 
                    src="${item.serviceImage}" 
                    alt="${item.serviceName}"
                    class="service-image"
                  >
                </td>

                <td class="service-name">${item.serviceName}</td>

                <td class="service-price">₹ ${item.servicePrice}</td>

                <td class="service-actions">

                  ${
                    isAdded
                      ? `
                        <button
                          type="button"
                          class="remove-btn"
                          data-index="${index}"
                        >
                          Remove
                          <span class="material-symbols-outlined">
                            remove_circle
                          </span>
                        </button>
                      `
                      : `
                        <button
                          type="button"
                          class="add-btn"
                          data-index="${index}"
                        >
                          Add
                          <span class="material-symbols-outlined">
                            add_circle
                          </span>
                        </button>
                      `
                  }

                </td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
  attachServiceEvents();
}

// Create Add and Remove event handlers
function attachServiceEvents() {
  const addButton = document.querySelectorAll(".add-btn");
  const removeButton = document.querySelectorAll(".remove-btn");

  addButton.forEach(function (button) {
    button.addEventListener("click", addService);
  });

  removeButton.forEach(function (button) {
    button.addEventListener("click", removeService);
  });
}

// ADD Item function
function addService(event) {
  const index = Number(event.currentTarget.dataset.index);

  const item = serviceData[index];

  const alreadyAdded = cart.some(function (cartItem) {
    return cartItem.name === item.serviceName;
  });

  if (alreadyAdded) {
    console.log("already added");
    // alert(`${item.serviceName} is already added to the cart.`);
    return;
  }

  cart.push({
    name: item.serviceName,
    price: item.servicePrice,
    image: item.serviceImage,
  });

  displayCart();
  displayServiceData();

  errorMessage.style.display = "none";

  console.log("Added:", item);
  console.log("Cart:", cart);
}

// Remove ITEM SERVICE

function removeService(event) {
  const index = Number(event.currentTarget.dataset.index);

  const item = serviceData[index];

  const cartIndex = cart.findIndex(function (cartItem) {
    return cartItem.name === item.serviceName;
  });

  if (cartIndex !== -1) {
    cart.splice(cartIndex, 1);
  }

  displayCart();
  displayServiceData();

  console.log("Removed:", item.serviceName);
  console.log("Cart:", cart);
}

// DISPLAY CART (working with no item)

function displayCart() {
  // Clear existing cart
  cartItems.innerHTML = "";

  // Check if cart is empty
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">

                <div class="info-icon">i</div>

                <h3>No Items Added</h3>

                <p>Add items to the cart from the services bar</p>

            </div>
        `;

    totalAmount.textContent = "₹ 0";

    return;
  }



  // Total variable
  let total = 0;

  cart.forEach(function (item, index) {
    total += item.price;

    const cartRow = document.createElement("div");

    cartRow.className = "cart-row";

    cartRow.innerHTML = `
            <span>${index + 1}</span>

            <span>${item.name}</span>

            <span>₹ ${item.price.toFixed(2)}</span>
        `;

    cartItems.appendChild(cartRow);
  });

  // Update total
  totalAmount.textContent = `₹ ${total.toFixed(2)}`;
}

// BOOK NOW BUTTON

bookNowBtn.addEventListener("click", function (event) {
  // 1. Prevent form submission
  event.preventDefault();

  // 2. Initialize validation
  let isValid = true;

  // Clear previous errors
  clearErrors();

  // 3. Get input values
  const usernameInput = document.getElementById("fullName").value.trim();

  const emailInput = document.getElementById("email").value.trim();

  const phoneInput = document.getElementById("phone").value.trim();

  // 4. Validation Rules

  // Check if cart is empty
  if (cart.length === 0) {
    errorMessage.style.display = "flex";
    return;
  }
  // Username check (Cannot be empty, min 3 characters)
  if (usernameInput === "") {
    showError("usernameError", "Name is required.");
    isValid = false;
  } else if (usernameInput.length < 3) {
    showError("usernameError", "Name must be at least 3 characters.");
    isValid = false;
  }

  // Email check using a Regular Expression (Regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput === "") {
    showError("emailError", "Email is required.");
    isValid = false;
  } else if (!emailRegex.test(emailInput)) {
    showError("emailError", "Please enter a valid email address.");
    isValid = false;
  }

  // Phone Number check (Cannot be empty, 10 digits)
    const phoneRegex = /^\d{10}$/;
  if (phoneInput === "") {
    showError("phoneError", "Phone number is required.");
    isValid = false;
  }else if (!phoneRegex.test(phoneInput)) {
    showError("phoneError", "Phone number must be exactly 10 digits.");
    isValid = false;
  }

  // Helper function to display error text
  function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
  }

  // Helper function to clear previous error messages
  function clearErrors() {
    const errorDisplays = document.querySelectorAll(".error-message");
    errorDisplays.forEach((span) => (span.textContent = ""));
  }

  // =========================
  // 5. Stop if validation fails
  // =========================

  if (!isValid) {
    return;
  }
  // Hide general error
  errorMessage.style.display = "none";

  // Show success message
showBookingSuccess();
});

// INITIAL DISPLAY

displayServiceData();

displayCart();
