import {describe, expect, it} from '@jest/globals';
import { twoPointer } from './index.ts'

describe('Reverse String (in-place)', () => {
    const data = [
        {string: 'hello', reversed: 'olleh'},
        {string: 'Diego', reversed: 'ogeiD'},
    ];

    it('using two pointer algorithm', () => {
        for (let item of data) {
            expect(
                twoPointer(item.string.split('')).join('')
            ).toBe(item.reversed)
        }
    })
})
