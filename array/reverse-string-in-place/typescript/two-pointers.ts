function twoPointer(str: &string[]): string[] {
    let left = 0
    let right = str.length -1

    while(left < right) {
        let temp = str[right]
        str[right] = str[left]!
        str[left] = temp!
        left++
        right--
    }
    return str
}

// TESTS
const data = [
    'hello',
    'world'
];

console.log(
    twoPointer(data[0].split('')).join('')
);
console.log(
    twoPointer(data[1].split('')).join('')
);
