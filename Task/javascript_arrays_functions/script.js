// find maximum number in a given array
// find sum of all elements in a give array

function fun(arr) {
  let maxNum = 0;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {

    // maximum number in a array
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }

    // sum of all elements
    sum = sum + arr[i]; 

    //count odd numbers in a array
    if (!(arr[i] % 2 == 0)){
       count++;
  }
}
  console.log(`Maximum number: ${maxNum}`);
  console.log(`Sum of all elements: ${sum}`);
  console.log(`count of odd numbers: ${count}`);

  }

fun([4, 8, 2, 11, 6,7,10]);
