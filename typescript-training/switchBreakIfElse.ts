function evaluateLoanEligibilitySwitch(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
): string {
  
  let scoreCategory: string;
  if (creditScore > 750) {
    scoreCategory = "HIGH";
  } else if (creditScore >= 650 && creditScore <= 750) {
    scoreCategory = "MID";
  } else {
    scoreCategory = "LOW";
  }

  let result: string;

  switch (scoreCategory) {
    case "HIGH":
      result = `${customerName} is eligible for the loan (auto-approved due to high credit score).`;
      break;

    case "LOW":
      result = `${customerName} is NOT eligible for the loan (credit score too low).`;
      break;

    case "MID":
      if (income < 50000) {
        result = `${customerName} is NOT eligible for the loan (income below $50,000).`;
      } else if (!isEmployed) {
        result = `${customerName} is NOT eligible for the loan (unemployed).`;
      } else if (debtToIncomeRatio < 40) {
        result = `${customerName} is eligible for the loan (meets DTI requirement).`;
      } else {
        result = `${customerName} is NOT eligible for the loan (DTI ratio too high).`;
      }
      break;

    default:
      result = `Unable to evaluate loan eligibility for ${customerName}.`;
      break;
  }

  return result;
}

// Test with John Doe’s details
const customerName = "John Doe";
const creditScore = 720;
const income = 55000.0;
const isEmployed = true;
const debtToIncomeRatio = 35.0;

console.log(evaluateLoanEligibilitySwitch(customerName, creditScore, income, isEmployed, debtToIncomeRatio));
