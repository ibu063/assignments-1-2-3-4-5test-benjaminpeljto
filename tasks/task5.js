// ************ TASK DESCRIPTION ************

// Process a given array of integers with the following **pipeline**:

/*
 ?      Keep only numbers divisible by 5
 ?      Subtract 2 from each remaining number
 ?      Find their average

 ?      Use tap (or a custom debug function) to log intermediate steps.
*/

// Input array: [3, 7, 8, 10, 15]

// Expected output: *PAY ATTENTION TO THE FORMAT OF THE LOGS AS THOSE ARE TESTED AS WELL*
//* Divisible by 5: [10, 15]  
//* After subtracting 2: [8, 13]  
//* Average: 10.5  

// TODO

// if opted for the tap function, you have the boilerplate code below:
const tap = label => x => {
  console.log(`${label}:`, x);
  return x;
};

const byFive = arr => arr.filter(x => x % 5 === 0);
const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// TODO finish the average function below:
const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
  
const process = pipe( 
    byFive,
    tap("Divisible by 5:"),
    arr => arr.map(x => x - 2),
    tap("After subtracting 2"),
    avg => { const res = average(avg); 
      console.log("Average:", res);
      return res;
    }
);