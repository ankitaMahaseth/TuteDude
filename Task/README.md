# 🛎️ JavaScript DOM Service Booking Web App

A simple and interactive **Service Booking Web App** built using **HTML, CSS, and Vanilla JavaScript**.

This project is created to practice JavaScript DOM manipulation, arrays, objects, event handling, dynamic HTML rendering, cart management, and basic form interaction.

---

## 📌 Project Overview

The Service Booking Web App allows users to:

- Browse available services one by one
- View service image, name, and price
- Add a service to the cart
- Skip a service
- Automatically move to the next service
- View selected services in the cart
- Calculate the total amount
- Display an empty cart message
- Book selected services
- Display an error message when trying to book without adding a service
- Show a completion message after all services have been reviewed

---

## 🚀 Features

### 1. Service Display

Services are stored in a JavaScript array of objects.

Each service contains:

```js
{
    serviceName: "Cleaning",
    servicePrice: 200,
    serviceImage: "image-url"
}
### 2. Add Item

The user can click ADD ITEM to add the current service.

### 3. Skip Item

The user can click SKIP ITEM to skip the current service.

### 4. One Service at a Time

The application uses one service at a time to keep track of the current service.

### 5. Cart Management

### 6. Duplicate Service Prevention

### 7. Total Amount Calculation

### 8. Empty Cart Message

### 9. Book Now Validation

### 10. All Services Completed

## Project Structure

Service-Booking/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md



## Application Flow

              Start
                │
                ▼
        Display first service
                │
                ▼
       ┌────────────────────┐
       │  Add Item / Skip   │
       └─────────┬──────────┘
                 │
          ┌──────┴──────┐
          │             │
        Add           Skip
          │             │
          ▼             ▼
       Add to         Ignore
        cart          service
          │             │
          └──────┬──────┘
                 │
                 ▼
        Move to next service
                 │
                 ▼
       More services available?
          │             │
         Yes            No
          │             │
          ▼             ▼
     Show next      Show completed
      service         message
          │
          ▼
        Continue

## How to Run

1: VS Code Live Server
2. Open the project in VS Code.
3. Install the Live Server extension if it is not already installed.
4. Open index.html.
5. Right-click the file.
6. Open with Live Server
```
