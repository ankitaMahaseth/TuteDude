const ResultValue = new Promise(function (resolve, reject) {
  const val1 = 10;
  const val2 = 2;

  if (val2 == 0) {
    reject("Division by zero is not allowed.");
  } else {
    const res = val1 / val2;
    resolve(res);
  }
});

ResultValue.then((data) => {
  console.log("Result:", data);
}).catch((data) => {
  console.log(data);
});
