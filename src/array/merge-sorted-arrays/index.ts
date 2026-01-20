/**
 * Problem: Create a function that merge two sorted arrays of numbers.
 * 
 * Run command: npx tsx index.ts
 */

function mergeSortedArrays(arr1: number[], arr2: number[]) {
    return [...arr1, ...arr2].sort((item1, item2) => item1 - item2)
}

console.log(
    mergeSortedArrays([0,3,4,31], [4,6,30])
)