// Step 1: Store transactions in an array
let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

// Step 2: Initialize counters and totals
let creditCount: number = 0;
let debitCount: number = 0;
let totalCredit: number = 0;
let totalDebit: number = 0;
let suspiciousCount: number = 0;

// Step 3: Loop through transactions
for (let amount of transactions) {
  if (amount > 0) {
    // Credit transaction
    creditCount++;
    totalCredit += amount;

    if (amount > 10000) {
      console.log(`Suspicious credit transaction with Amount: ${amount}`);
      suspiciousCount++;
    }
  } else {
    // Debit transaction
    debitCount++;
    totalDebit += amount; // negative value

    if (amount < -10000) {
      console.log(`Suspicious debit transaction with Amount: ${amount}`);
      suspiciousCount++;
    }
  }
}

// Step 4: Calculate remaining balance
let remainingBalance: number = totalCredit + totalDebit; // debit is negative

// Step 5: Print results
console.log("Total Credit Transactions:", creditCount);
console.log("Total Debit Transactions:", debitCount);
console.log("Total Amount Credited:", totalCredit);
console.log("Total Amount Debited:", Math.abs(totalDebit));
console.log("Remaining Balance:", remainingBalance);
console.log("Total Suspicious Transactions:", suspiciousCount);
