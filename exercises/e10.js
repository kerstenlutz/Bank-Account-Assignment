// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

import { bankAccounts } from "../data/data";

export function getClientsWithLetterInName(array, letter) {
  let result = [];
  for (let elem in bankAccounts) {
    if (bankAccounts[elem].name.includes(letter)) {
      result.push(bankAccounts[elem].name);
    }
    else if (bankAccounts[elem].name.includes(letter.toUpperCase())) {
      result.push(bankAccounts[elem].name);
    }
  }
  return result;
}

getClientsWithLetterInName(bankAccounts, 'e');

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
