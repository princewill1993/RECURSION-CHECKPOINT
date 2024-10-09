// QUESTION:     Power Function: Write a recursive function to calculate the result of raising a number to a given power.

function powerOfNum(x, n) {
  if (n === 0) {
    return 1;
  } else {
    return n * powerOfNum(x, n - 1);
  }
}

/* 2. QUESTION:   Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20
*/


let ticketPrice1 = 10;
let ticketPrice2 = 15;
let ticketPrice3 = 20;

function getTicketPrices() {
  let age = prompt("Enter your age: ");

  if (age !== null) {
    age = Number(age);
    if (isNaN(age) || age < 0) {
      alert(`Invalid age, kindly enter a valid number`);
    } else if (age <= 12) {
      alert(`Ticket price is ${10}`);
    } else if (age === 13 && age === 17) {
      alert(`Ticket price is ${15}`);
    } else if (age >= 18) {
      alert(`Ticket price is ${20}`);
    } else {
      alert("Invalid age. Please enter a valid number");
    }
  }
}

console.log(getTicketPrices());


// OR

// function getTicketPrices() {
//   let age = prompt("Enter your age: ");

//   if (age !== null) {
//     age = Number(age);
//     if (isNaN(age) || age < 0) {
//       alert("Invalid age, kindly enter a valid number");
//     } else if (age <= 12) {
//       alert("Ticket price is $10");
//     } else if (age === 13 && age === 17) {
//       alert("Ticket price is $15");
//     } else if (age >= 18) {
//       alert("Ticket price is $20");
//     } else {
//       alert("Invalid age. Please enter a valid number");
//     }
//   }
// }

