// Step 1: Define Employee structure
interface Employee {
  name: string;
  baseSalary: number;
  experience: number;
  rating: number;
}

// Step 2: Store employee records
let employees: Employee[] = [
  { name: "Alice Johnson", baseSalary: 75000.0, experience: 5.1, rating: 4.2 },
  { name: "Bob Smith", baseSalary: 68000.0, experience: 3.2, rating: 3.8 },
  { name: "Carol Davis", baseSalary: 82000.0, experience: 7.1, rating: 4.5 },
  { name: "David Brown", baseSalary: 90000.0, experience: 10.2, rating: 2.5 },
  { name: "Eva Green", baseSalary: 60000.0, experience: 2.4, rating: 3.5 }
];

// Step 3: Initialize Map to store hike percentages
let hikeMap: Map<string, number> = new Map();

// Step 4: Loop through employees and calculate hike
for (let emp of employees) {
  let variablePayPercent: number;
  let bonus: number;

  // Conditional statements for rating
  if (emp.rating >= 4.0) {
    variablePayPercent = 15.0;
    bonus = 1500;
  } else if (emp.rating >= 3.0 && emp.rating < 4.0) {
    variablePayPercent = 10.0;
    bonus = 1200;
  } else {
    variablePayPercent = 3.0;
    bonus = 300;
  }

  // Extra reward for experience >= 5 years
  let reward: number = emp.experience >= 5 ? 5000 : 0;

  // Calculate hike
  let hike: number = (emp.baseSalary * (variablePayPercent / 100)) + bonus + reward;

  // Calculate hike percentage
  let hikePercent: number = (hike / emp.baseSalary) * 100;

  // Store in Map
  hikeMap.set(emp.name, hikePercent);
}

// Step 5: Print results
console.log("Employee Hike Percentages:");
for (let [name, hikePercent] of hikeMap.entries()) {
  console.log(`${name}: ${hikePercent.toFixed(2)}%`);
}
