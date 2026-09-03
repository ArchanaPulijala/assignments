/* Check base condition

If n <= 1, return false because prime numbers must be greater than 1.

Loop through possible divisors
When checking if a number n is prime, we want to see if it has any divisors other than 1 and itself.

If n can be divided evenly by some number i, then n = i × j.

One of those factors (i or j) must be less than or equal to √n, and the other must be greater than or equal to √n.

That means if no divisor is found up to √n, there won’t be any beyond it either (except n itself).
Use a loop from 2 to √n.

If n % i === 0, then n is divisible by i, so it’s not prime.

Return result

If no divisors are found, return true. */
function isPrime(n: number): boolean {
  // Step 1: Prime numbers must be greater than 1
  if (n <= 1) {
    return false;
  }

  // Step 2: Check divisibility from 2 up to √n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // If divisible, it's not prime
      return false;
    }
  }

  // Step 3: If no divisors found, it's prime
  return true;
}

// Test cases
console.log(isPrime(7));   // true
console.log(isPrime(25));  // false
console.log(isPrime(1));   // false
