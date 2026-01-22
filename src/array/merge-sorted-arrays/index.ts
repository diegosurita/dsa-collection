/**
 * Problem: Create a function that merge two sorted arrays of numbers.
 * 
 * Run command: npx tsx index.ts
 */

// Time Complexity: O(n)
// Space Complexity: O(n)
function spreadOperator(arr1: number[], arr2: number[]) {
    return [...arr1, ...arr2].sort((item1, item2) => item1 - item2)
}

console.log(
    'reverse using spread operator',
    spreadOperator([0,3,4,31], [4,6,30])
)