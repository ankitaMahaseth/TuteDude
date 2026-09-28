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

const bookNowBtn = document.getElementById("bookNowBtn");
const errorMessage = document.getElementById("errorMessage");
const infoMessage = document.getElementById("infoMessage");

const div = document.getElementById("service-data");

// CART

let cart = [];

// CURRENT SERVICE
let currentServiceIndex = 0;

// DISPLAY SERVICE
function displayServiceData() {
  const item = serviceData[currentServiceIndex];

  div.innerHTML = `
    <div class="service-image">
      <img 
        src="${item.serviceImage}" 
        alt="${item.serviceName}" height="200" width="516"
      >
    </div>

    <div class="service-info">
      <h2>${item.serviceName}</h2>
      <span class="price">₹ ${item.servicePrice}</span>
    </div>

    <div class="service-bottom">
      <div class="service-btn">

        <button type="button" class="skip-btn">
          Skip Item
          <span class="material-symbols-outlined">
            remove_circle
          </span>
        </button>

        <button type="button" class="add-btn">
          Add Item
          <span class="material-symbols-outlined">
            add_circle
          </span>
        </button>

      </div>
    </div>
  `;

  attachServiceEvents();
}

// Create Add and Skip event handlers
function attachServiceEvents() {
  const addButton = document.querySelector(".add-btn");
  const skipButton = document.querySelector(".skip-btn");

  addButton.addEventListener("click", addService);
  skipButton.addEventListener("click", skipService);
}

// ADD Item function
function addService() {
  const item = serviceData[currentServiceIndex];

  const alreadyAdded = cart.some(function (cartItem) {
    return cartItem.name === item.serviceName;
  });

  if (alreadyAdded) {
    alert(`${item.serviceName} is already added to the cart.`);
    return;
  }

  cart.push({
    name: item.serviceName,
    price: item.servicePrice,
    image: item.serviceImage,
  });

  displayCart();

  errorMessage.style.display = "none";

  console.log("Added:", item);
  console.log("Cart:", cart);

  currentServiceIndex++;

  if (currentServiceIndex < serviceData.length) {
    displayServiceData();
  } else {
    showAllServicesCompleted();
  }
}

// SKIP ITEM SERVICE

function skipService() {
  const item = serviceData[currentServiceIndex];

  console.log("Skipped:", item.serviceName);

  currentServiceIndex++;

  if (currentServiceIndex < serviceData.length) {
    displayServiceData();
  } else {
    showAllServicesCompleted();
  }
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

  // Create cart table header
  const tableHeader = document.createElement("div");

  tableHeader.className = "table-header";

  cartItems.appendChild(tableHeader);

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
displayCart();

// DISPLAY ALL SERVICES IN THE CART

function showAllServicesCompleted() {
  div.innerHTML = `
    <div class="service-completed">

      <div class=" info_complete_icon material-symbols-outlined">
        check_circle
      </div>

      <h2>All Services Completed</h2>

      <p>You have reviewed all available services.</p>

    </div>
  `;
    infoMessage.style.display = "none";
}

// BOOK NOW BUTTON 

bookNowBtn.addEventListener("click", function () {
  // Check if cart is empty
  if (cart.length === 0) {
    errorMessage.style.display = "flex";
    return;
  }

  // Hide error
  errorMessage.style.display = "none";

  // Calculate total
  let total = 0;

  cart.forEach(function (item) {
    total += Number(item.price);
  });

  // Booking successful
  alert(
    `Booking successful!\n\n` +
      `Services: ${cart.length}\n` +
      `Total Amount: ₹ ${total.toFixed(2)}`,
  );
});

// INITIAL DISPLAY

displayServiceData();

displayCart();
