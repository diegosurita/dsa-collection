/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function twoPointer(str: &string[]): string[] {
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