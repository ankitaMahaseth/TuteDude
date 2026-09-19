# Check if a number is Even or Odd

A simple JavaScript program that uses a **reusable function** to check whether a given number is even or odd.

- JavaScript

## 📂 Project Structure

```text
even-odd-checker/
│
├── index.html
├── script.js
└── README.md
```

## 💻 Code

```javascript
function checkNumber(num) {
  if (num % 2 === 0) {
    return `${num} is Even.`;
  } else {
    return `${num} is Odd.`;
  }
}

console.log(checkNumber(5));
console.log(checkNumber(10));
console.log(checkNumber(17));
```

## 📤 Expected Output

```text
5 is Odd.
10 is Even.
17 is Odd.
```

🚀 How to Run

1. Clone or download the project

Download the project to your computer.

2. Open the project

Open the project folder in VS Code or another code editor.

3. Run the HTML file

Open index.html in your browser.

4. Open the browser console

Right-click on the webpage and select:

Inspect → Console

```

```
