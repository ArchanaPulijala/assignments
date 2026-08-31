function evaluateLoanEligibilitySwitch(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
): string {
  
  // Determine credit score category
  let scoreCategory: string;
  if (creditScore > 750) {
    scoreCategory = "HIGH";
  } else if (creditScore >= 650 && creditScore <= 750) {
    scoreCategory = "MID";
  } else {
    scoreCategory = "LOW";
  }

  // Switch based on category
  switch (scoreCategory) {
    case "HIGH":
      return `${customerName} is eligible for the loan (auto-approved due to high credit score).`;

    case "LOW":
      return `${customerName} is NOT eligible for the loan (credit score too low).`;

    case "MID":
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

    default:
      return `Unable to evaluate loan eligibility for ${customerName}.`;
  }
}

// Test with John Doe’s details
const customerName = "John Doe";
const creditScore = 720;
const income = 55000.0;
const isEmployed = true;
const debtToIncomeRatio = 35.0;

console.log(evaluateLoanEligibilitySwitch(customerName, creditScore, income, isEmployed, debtToIncomeRatio));
