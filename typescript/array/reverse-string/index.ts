/**
 * Problem: Create a function that reverse a string passed via param.
 * 
 * Run command: npx tsx for-loop.ts
 */


function reverseForLoop(str: string): string {
    let reversed: string = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed.concat(str[i])
    }

    return reversed
}

console.log(
    reverseForLoop('Reversed using for loop')
)

function reverseSplit(str: string) {
    return str.split('').reverse().join('')
}

console.log(
    reverseSplit('Reversed using split, reverse and join JS functions')
)

console.log(
    [...'Reversed using spread operator'].reverse().join('')
)