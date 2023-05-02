// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments, output an error msg if not.

// extract the command-line arguments
const args = process.argv.slice(2);
console.log('args:', args);

// edge case: make sure we have at least 2 arguments
if (args.length < 2) {
  console.log('Error: please enter at least 2 arguments');
  // return; //exit the program // if return works, should we be using it? using the side effect of the return to exit

  process.exit();
}
// iterate thought the arguments
// c-style loop
// for (let i=0; i < args.length; i++) {

// }

// for of or forEach

// Add numbers together
let total = 0;

for (let arg of args) {
  const convertedNum = Number(arg);
  // edge case: If any argument is not a number, output an error message.
  if (isNaN(convertedNum)) {
    console.log('Error: please enter only numbers');
    // stop the execution?
    // return;
   
    process.exit();
  }

  // edge case: check if we have a whole number
  if (Number.isInteger(convertedNum)) {
    total += convertedNum;
    // console.log('arg:', arg, 'type:', typeof arg, 'Total:', total);
  }
}
// output the result
console.log('Total:', total);
