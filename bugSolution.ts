function addNumbers(a: number, b: number): number {
  return a + b;
}

function addStrings(a: string, b: string): string {
  return a + b;
}

let result1 = addNumbers(1, 2); // Correct
let result2 = addStrings("1", "2"); // Correct

//let result3 = addNumbers(1, "2"); // Type error correctly caught
//let result4 = addStrings(1, 2); // Type error correctly caught