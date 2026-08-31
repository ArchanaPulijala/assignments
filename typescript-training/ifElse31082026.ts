// Define a function to evaluate loan eligibility
function evaluateLoanEligibility(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
): string {
  
  // Rule 1: Credit Score
  if (creditScore > 750) {
    return `${customerName} is eligible for the loan (auto-approved due to high credit score).`;
  } else if (creditScore < 650) {
    return `${customerName} is NOT eligible for the loan (credit score too low).`;
  } else {
    // Credit score between 650 and 750 → additional checks
    if (income < 50000) {
      return `${customerName} is NOT eligible for the loan (income below $50,000).`;
    }
    if (!isEmployed) {
      return `${customerName} is NOT eligible for the loan (unemployed).`;
    }
    if (debtToIncomeRatio < 40) {
      return `${customerName} is eligible for the loan (meets DTI requirement).`;
    } else {
      return `${customerName} is NOT eligible for the loan (DTI ratio too high).`;
    }
  }
}

// Test with John Doe’s details
const customerName = "John Doe";
const creditScore = 720;
const income = 55000.0;
const isEmployed = true;
const debtToIncomeRatio = 35.0;

console.log(evaluateLoanEligibility(customerName, creditScore, income, isEmployed, debtToIncomeRatio));
