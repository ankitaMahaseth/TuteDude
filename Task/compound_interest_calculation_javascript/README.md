# JavaScript - Compound Interest Calculation

A simple JavaScript project that calculates the **compound interest amount** using the principal amount, interest rate, compounding frequency, and time period.

## 📌 Project Overview

This project demonstrates how to use JavaScript mathematical operators and variables to calculate the final amount using the compound interest formula.

The project is useful for practicing:

- JavaScript variables
- Arithmetic operators
- Exponentiation operator (`**`)
- Mathematical formulas
- Console output
- Basic JavaScript logic

## 🧮 Compound Interest Formula

The formula used is:

```text
A = P × (1 + r/n)^(n×t)
```

Where:

| Variable | Description                                     |
| -------- | ----------------------------------------------- |
| `A`      | Final amount                                    |
| `P`      | Principal amount                                |
| `r`      | Annual interest rate                            |
| `n`      | Number of times interest is compounded per year |
| `t`      | Time in years                                   |

Since the interest rate is entered as a percentage, it is converted into decimal form by dividing it by `100`.

## 💻 Example

For:

```text
Principal (P) = 1000
Rate (r) = 5%
Compounding (n) = 2 times/year
Time (t) = 3 years
```

The JavaScript calculation is:

```js
const A = P * (1 + r / 100 / n) ** (n * t);
```

The result is approximately:

```text
1159.70
```

## 📂 Project Structure

compound-interest/
│
├── index.html
└── README.md
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
