/**
 * Problem: Create a function that reverse a string passed via param.
 * 
 * Run command: npx tsx for-loop.ts
 */


export function withForLoop(str: string): string {
    let reversed: string = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed.concat(str[i]!)
    }

    return reversed
}

export function withSplit(str: string): string {
    return str.split('').reverse().join('')
}

export function withSpreadOperator(str: string): string {
    return [...str].reverse().join('')
}