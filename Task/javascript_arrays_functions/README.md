# JavaScript Array and Functions

This is a simple JavaScript practice program that demonstrates how to perform basic operations on an array using a `for` loop.

## 📌 Features

The program performs the following operations:

1. Finds the **maximum number** in an array.
2. Calculates the **sum of all elements** in an array.
3. Counts the **number of odd elements** in an array.

## 🛠️ Technologies Used

- JavaScript
- `for` loop
- Arrays
- Conditional statements
- Template literals

## 📂 Code

```javascript
// find maximum number in a given array
// find sum of all elements in a given array

function fun(arr) {
  let maxNum = 0;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // maximum number in an array
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }

    // sum of all elements
    sum = sum + arr[i];

    // count odd numbers in an array
    if (!(arr[i] % 2 == 0)) {
      count++;
    }
  }

  console.log(`Maximum number: ${maxNum}`);
  console.log(`Sum of all elements: ${sum}`);
  console.log(`Count of odd numbers: ${count}`);
}

fun([4, 8, 2, 11, 6, 7, 10]);
```

## 🔍 Example Input

```javascript
[4, 8, 2, 11, 6, 7, 10];
```

## 📊 Expected Output

```text
Maximum number: 11
Sum of all elements: 48
Count of odd numbers: 2
```

## 🧠 Concepts Practiced

### 1. Array

An array stores multiple values in a single variable.

```javascript
let arr = [4, 8, 2, 11, 6, 7, 10];
```

### 2. For Loop

The `for` loop is used to visit every element of the array.

```javascript
for (let i = 0; i < arr.length; i++) {
  // code
}
```

### 3. Finding Maximum

The current element is compared with `maxNum`.

```javascript
if (arr[i] > maxNum) {
  maxNum = arr[i];
}
```

### 4. Finding Sum

Each array element is added to `sum`.

```javascript
sum = sum + arr[i];
```

### 5. Counting Odd Numbers

The `%` operator checks whether a number is divisible by `2`.

```javascript
if (!(arr[i] % 2 == 0)) {
  count++;
}
```

If the remainder is not `0`, the number is odd.

## 📂 Project Structure

```text
javascript-number-practice/
│
├── index.html
├── script.js
└── README.md
```

## ▶️ How to Run

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
