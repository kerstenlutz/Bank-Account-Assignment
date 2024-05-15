// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]



export function getClientWithLeastPositiveBalance(array) {
  const bankAccounts = array;
  let lowestBalance = Infinity;
  let result = [];
  for (let elem in bankAccounts) {
    if (bankAccounts[elem].balance < lowestBalance && bankAccounts[elem].balance > 0) {
      lowestBalance = bankAccounts[elem].balance;
      result = [];
      result.push(bankAccounts[elem]);
    } 
  }
  return result;
}






//Based on the questions parameters, this block of code returns the lowest non-zero balance AND an empty array if all balances are equal to or lower than zero...
//Please explain why it doesn't pass all the tests?



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function