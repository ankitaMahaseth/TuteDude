# JavaScript - Promise Based Division Function

A simple JavaScript example demonstrating how to use **Promises**, `resolve()`, `reject()`, `.then()`, and `.catch()` to perform division safely.

## 📌 Project Overview

This project demonstrates how a JavaScript `Promise` can be used to handle a division operation.

The program:

- Takes two numbers.
- Checks whether the divisor is `0`.
- Rejects the Promise if division by zero is attempted.
- Resolves the Promise with the calculated result when the divisor is valid.
- Handles the successful result using `.then()`.
- Handles errors using `.catch()`.

## 🛠️ Technologies Used

- JavaScript
- JavaScript Promises
- script.js

## 📂 Project Structure

```text
promise-division/
│
├── index.html
├── script.js
└── README.md
```

## 💻 Code

```js
const resultValue = new Promise((resolve, reject) => {
  const val1 = 10;
  const val2 = 2;

  if (val2 === 0) {
    reject("Division by zero is not allowed.");
  } else {
    const result = val1 / val2;
    resolve(result);
  }
});

resultValue
  .then((data) => {
    console.log("Result:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

## 🔍 How It Works

### 1. Create a Promise

```js
const resultValue = new Promise((resolve, reject) => {
```

A Promise represents an operation that may complete successfully or fail.

It has two important functions:

- `resolve()` – used when the operation is successful.
- `reject()` – used when the operation fails.

---

### 2. Define the Values

```js
const val1 = 10;
const val2 = 2;
```

The program will calculate:

```text
10 / 2 = 5
```

---

### 3. Check for Division by Zero

```js
if (val2 === 0) {
  reject("Division by zero is not allowed.");
}
```

Division by zero is not allowed.

If `val2` is `0`, the Promise is rejected.

---

### 4. Calculate the Result

If the divisor is not zero:

```js
const result = val1 / val2;
resolve(result);
```

The calculated result is passed to `resolve()`.

For this example:

```text
10 / 2 = 5
```

So the Promise is resolved with:

```js
resolve(5);
```

---

### 5. Handle the Successful Result

```js
.then((data) => {
    console.log("Result:", data);
})
```

The `.then()` method executes when the Promise is successfully resolved.

Output:

```text
Result: 5
```

---

### 6. Handle Errors

```js
.catch((error) => {
    console.log("Error:", error);
});
```

The `.catch()` method handles a rejected Promise.

For example, if:

```js
const val2 = 0;
```

the output will be:

```text
Error: Division by zero is not allowed.
```

## ▶️ How to Run

### Step 1: Clone or download the project

Download the project to your computer.

### Step 2: Open the project

Open the project folder in VS Code or another code editor.

### Step 3: Run the HTML file

Open index.html in your browser.

### Step 4: Open the browser console

Right-click on the webpage and select:

Inspect → Console

```text
Result: 5
```

## 📚 Concepts Learned

This example demonstrates:

- JavaScript Promises
- `new Promise()`
- `resolve()`
- `reject()`
- `.then()`
- `.catch()`
- Error handling
- Division-by-zero validation
- Strict equality (`===`)
- Arrow functions
