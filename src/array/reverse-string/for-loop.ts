/**
 * Problem: Create a function that reverse a string passed via param.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * Run command: npx tsx for-loop.ts
 */


function reverse(str: string): string {
    let reversed: string = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed.concat(str[i])
    }

    return reversed
}

const reversedStr = reverse('Hello world!')
console.log(`Reversed string: ${reversedStr}`)