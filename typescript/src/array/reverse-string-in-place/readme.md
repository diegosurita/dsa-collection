# Reverse String  (in-place)

## The Problem
Write a function that reverses a string. The input string is given as an array of characters `s`.<br>
You must do this by modifying the input array in-place with `O(1)` extra memory.<br>
Example 1:

Input: `s = ["h","e","l","l","o"]`<br>
Output: `["o","l","l","e","h"]`<br>
Example 2:

Input: `s = ["H","a","n","n","a","h"]`<br>
Output: `["h","a","n","n","a","H"]`

Constraints:
- `1 <= s.length <= 105`
- `s[i]` is a printable ascii character.

## Solution
This problem was resolved using the **Two Pointers Algorithm**.
- Time Complexity: O(n)
- Space Complexity: O(n)

## Real-World Usage
- **Bioinformatics and DNA Sequencing:** In genetics, DNA is double-stranded and runs in opposite directions. To find specific patterns or genes, scientists often need the **Reverse Complement** of a DNA sequence.
- **Data Compression and Encoding:** Some of the most famous compression algorithms use string manipulation as a precursor to making files smaller, such as, Burrows-Wheeler Transform (BWT) and Efficient Storage.
- **Symmetric Cryptography:** Many encryption algorithms (like **AES**) use "rounds" of data scrambling. While they don't just "flip a word," they do utilize bit-reversal and byte-shuffling.
- **Technical Workarounds (The "Display" Hack):** sometimes, string reversal is used to solve quirks in how data is presented, like, Right-to-Left (RTL) Languages and File Extensions.

## Reference
- https://leetcode.com/problems/reverse-string/description/
