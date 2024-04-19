
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]


import { bankAccounts } from "../data/data";

export function getClientWithGreatestBalance(array) {
  let maxBalance = 0;
  let result = [];
  for (let elem in bankAccounts) {
     if (bankAccounts[elem].balance > maxBalance){
        maxBalance = bankAccounts[elem].balance;
        result = [];
        result.push(bankAccounts[elem])
     }
     else if (bankAccounts[elem].balance === maxBalance){
        result.push(bankAccounts[elem])
     }
  }
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
