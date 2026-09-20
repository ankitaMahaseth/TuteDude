//sum of first n numbers where n is a variable
function sumOfNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }

  console.log(`sum is ${sum}.`);
}

sumOfNum(3); //6
sumOfNum(5); //15

// Table of n where n is a variable
function tableOfNum(num) {
  for (let i = 1; i <= 10; i++) {
    let res = num * i;
    console.log(res);
  }
}
tableOfNum(5); // 5 10 15 20 .....50

function checkPrime(num) {
  // numbers less than or equal to 1
  if (num <= 1) {
    console.log("Is it a prime number? No");
    return;
  }

  // 2 is the only even prime number
  if (num === 2) {
    console.log("Is it a prime number? Yes");
    return;
  }

  // all other even numbers
  if (num % 2 === 0) {
    console.log(`Is ${num} a prime number? No`);
    return;
  }

  // check other odd numbers
  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) {
      console.log(`Is ${num} a prime number? No`);
      return;
    }
  }
  console.log(`Is ${num} a prime number? Yes`);
}

checkPrime(7); // Yes
checkPrime(44); // No
checkPrime(67); // Yes

//Factors of num
function factorOfNum(num) {
  for (let i = 1; i < num; i++) if (num % i == 0) console.log(i);
}
factorOfNum(10); // 1,2,5
factorOfNum(24); // 1,2,5

//sum of all digits of a number
function sumOfDigits(num) {
  let originalNum = num;
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  console.log(`sum of digit of ${originalNum} is ${sum}.`);
}

sumOfDigits(12); //3
sumOfDigits(50); //5

// Check Armstrong Number

function checkArmstrongNumber(num) {
  let originalNum = num;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit ** 3;
    num = Math.floor(num / 10);
  }
  if (sum == originalNum) {
    // return true;
    console.log(`Is ${originalNum} an Armstrong number ? Yes`);
  } else {
    console.log(`Is ${originalNum} an Armstrong number ? No`);
  }
}
checkArmstrongNumber(153); //yes
