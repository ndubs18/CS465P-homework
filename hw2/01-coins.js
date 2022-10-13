import "./styles.css";

/** Exercise 01 - Coins **/
//TODO What about values with just dollar ammounts or values with zeros IE: 0.20
import "./styles.css";

const calculateChange = (input) => {
  let output = "";
  if (input < 10 && input > 0) {
    output = `${input} ==> `;
    let change = input;
    let dummy = change.toString();
    dummy = dummy.replace(".", "");

    dummy = +dummy;
    let temp = dummy;

    for (let i = 0; i <= 4; i += 1) {
      if (i == 0) {
        let dollars = Math.floor(temp / 100);

        if (dollars >= 1 && dollars <= 10) {
          temp = temp - dollars * 100;
          output += ` ${dollars}${dollars > 1 ? " dollars" : " dollar"}`;
          if (temp > 0) output += ",";
        }
      } else if (i == 1) {
        let quarters = Math.floor(temp / 25);

        if (quarters >= 1) {
          temp = temp - quarters * 25;
          output += ` ${quarters}${quarters > 1 ? " quarters" : " quarter"}`;
          if (temp > 0) output += ",";
        }
      } else if (i == 2) {
        let dimes = Math.floor(temp / 10);

        if (dimes >= 1) {
          temp = temp - dimes * 10;
          output += ` ${dimes}${dimes > 1 ? " dimes" : " dime"}`;
          if (temp > 0) output += ",";
        }
      } else if (i == 3) {
        let nickels = Math.floor(temp / 5);

        if (nickels >= 1) {
          temp = temp - nickels * 5;
          output += ` ${nickels}${nickels > 1 ? " nickels" : " nickel"}`;
          if (temp > 0) output += ",";
        }
      } else if (i == 4) {
        let pennies = temp;

        if (pennies >= 1) {
          output += ` ${pennies}${pennies > 1 ? " pennies" : " penny"}`;
        }
      }
    }
  } else output += "Change is too large";

  return output;
};
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
