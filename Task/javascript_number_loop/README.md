# JavaScript Loops

A collection of beginner-friendly JavaScript programs focused on **loops, conditions, arithmetic operations, functions, and number-based problem solving**.

This project is created as part of my JavaScript practice to strengthen programming fundamentals and problem-solving skills.

## 📚 Topics Covered

The project currently contains the following programs:

1. Sum of first `n` numbers
2. Multiplication table of `n`
3. Check whether a number is prime
4. Find factors of a number
5. Sum of all digits of a number
6. Check whether a number is an Armstrong number

---

## 1. Sum of First N Numbers

Calculates the sum of all numbers from `1` to the given number.

### Example

```javascript
sumOfNum(3);
```

Output:

```text
sum is 6.
```

### Logic

```text
1 + 2 + 3 = 6
```

---

## 2. Multiplication Table

Prints the multiplication table of a given number from `1` to `10`.

### Example

```javascript
tableOfNum(5);
```

Output:

```text
5
10
15
20
25
30
35
40
45
50
```

---

## 3. Check Prime Number

Checks whether a given number is a prime number.

A prime number has exactly two factors:

```text
1 and itself
```

### Example

```javascript
checkPrime(7);
checkPrime(44);
checkPrime(67);
```

Output:

```text
Is 7 a prime number? Yes
Is 44 a prime number? No
Is 67 a prime number? Yes
```

### Logic

The program:

* Rejects numbers less than or equal to `1`
* Handles `2` separately
* Rejects other even numbers
* Checks odd numbers for divisibility
* Stops immediately when a divisor is found

---

## 4. Find Factors of a Number

Finds all factors of a given number except the number itself.

### Example

```javascript
factorOfNum(10);
```

Output:

```text
1
2
5
```

Because:

```text
10 % 1 = 0
10 % 2 = 0
10 % 5 = 0
```

> Note: For `24`, the correct factors using the current implementation are `1, 2, 3, 4, 6, 8, 12`.

---

## 5. Sum of Digits

Calculates the sum of all digits of a number.

### Example

```javascript
sumOfDigits(12);
```

Output:

```text
sum of digit of 12 is 3.
```

### Logic

```text
12 → 1 + 2 → 3
```

The program uses:

```javascript
num % 10
```

to extract the last digit and:

```javascript
Math.floor(num / 10)
```

to remove the last digit.

---

## 6. Armstrong Number

Checks whether a three-digit number is an Armstrong number.

An Armstrong number is a number where the sum of the cubes of its digits is equal to the original number.

### Example

```javascript
checkArmstrongNumber(153);
```

Calculation:

```text
1³ + 5³ + 3³

= 1 + 125 + 27

= 153
```

Output:

```text
Is 153 an Armstrong number ? Yes
```

### Examples

```text
153 → Armstrong
407 → Armstrong
123 → Not Armstrong
```

---

## 🛠️ JavaScript Concepts Practiced

This project helps practice:

* Functions
* Function parameters
* `for` loops
* `while` loops
* `if / else`
* `return`
* Arithmetic operators
* Modulus operator `%`
* Increment operator `++`
* Conditional logic
* Template literals
* `Math.floor()`
* Working with digits
* Basic problem solving

---

## 📂 Project Structure

```text
javascript-number-practice/
│
├── index.html
├── script.js
└── README.md
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