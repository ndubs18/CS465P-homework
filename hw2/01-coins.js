/** Exercise 01 - Coins **/
//TODO Need to figure out commas
import "./styles.css";

const calculateChange = (input) => {
  let output = `${input} ==> `;
  let change = input;

  let dummy = change.toString();
  dummy = dummy.replace(".", "");

  if (dummy.length < 5) dummy = +dummy;

  let temp = dummy;

  for (let i = 0; i <= 4; i += 1) {
    if (temp > 0) {
      if (i == 0) {
        let dollars = Math.floor(temp / 100);

        if (dollars >= 1) {
          temp = temp - dollars * 100;
          output += ` ${dollars}${dollars > 1 ? " dollars" : " dollar"}`;
        }
      } else if (i == 1) {
        let quarters = Math.floor(temp / 25);

        if (quarters >= 1) {
          temp = temp - quarters * 25;
          output += ` ${quarters}${quarters > 1 ? " quarters" : " quarter"}`;
        }
      } else if (i == 2) {
        let dimes = Math.floor(temp / 10);
        if (dimes >= 1) {
          temp = temp - dimes * 10;

          output += ` ${dimes}${dimes > 1 ? " dimes" : " dime"}`;
        }
      } else if (i == 3) {
        let nickels = Math.floor(temp / 5);

        if (nickels >= 1) {
          temp = temp - nickels * 5;
          output += ` ${nickels}${nickels > 1 ? " nickels" : " nickel"}`;
        }
      } else if (i == 4) {
        let pennies = temp;

        output += ` ${pennies}${pennies > 1 ? " pennies" : " penny"}`;
      }
    }
  }

  return output;
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
