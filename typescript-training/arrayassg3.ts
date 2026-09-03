// Create arrays for student names and marks
let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];

// Add 10 marks to each student using assignment operators
let updatedMarks: number[] = [];
for (let i = 0; i < marks.length; i++) {
  updatedMarks[i] = marks[i] + 10;
}

// Display updated marks
console.log("Updated Marks:");
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}

// Calculate average marks
let total: number = 0;
for (let mark of updatedMarks) {
  total += mark;
}
let average: number = total / updatedMarks.length;

console.log("Average Marks:", average);
