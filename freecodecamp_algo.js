/*
Intermediate Algorithm Scripting: Smallest Common MultiplePassed
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {

    //Using the ternary operator to find our biggest and smallest numbers, regardless of where they are placed
    let smallInt = arr[0] > arr[1] ? arr[1] : arr[0]
    let bigInt = arr[0] > arr[1] ? arr[0] : arr[1]
  
    let scm = bigInt;
    //Declaring a new variable to represent our smallest common multiple
    while (true) {
      //While the context of this loop is true,
      let isScm = true;
      //we're checking smallInt by bigInt&&counting up until we find a remainder greater than 1.
      for (let i = smallInt; i <= bigInt; i++) {
        if (scm % i !== 0) {
          isScm = false;
          break;
          //If we a remainder greater than 1, we break out of the loop.
        }
      }
      if (isScm == true) {
        return scm;
      } else {
        scm++;
      }
    }
  }
  //Once we find it isScm will == true and return the answer, otherwise, we'll keep counting.
  console.log(smallestCommons([1, 5]));
  ///Logging the answer so we can see how it goes down.
  

/* 
Intermediate Algorithm Scripting: Sum All Numbers in a RangePassed
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {

    let  smallInt = arr[0] > arr[1] ? arr[1] : arr[0]
    let  bigInt = arr[0] > arr[1] ? arr[0] : arr[1]
    
    let total = 0;
    for (let i = smallInt; i <= bigInt; i++) {
      total += i }
      return total;
      }
    
    sumAll([1, 4]);
    