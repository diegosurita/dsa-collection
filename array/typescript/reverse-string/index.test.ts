import {describe, expect, it} from '@jest/globals';
import { withForLoop, withSplit, withSpreadOperator } from './index.ts'

describe('Reverse String', () => {
    const data = [
        {string: 'hello', reversed: 'olleh'},
        {string: 'Diego', reversed: 'ogeiD'},
    ];

    it('using a for loop', () => {
        for (let item of data) {
            expect(withForLoop(item.string)).toBe(item.reversed)
        }
    })

    it('using array split function', () => {
        for (let item of data) {
            expect(withSplit(item.string)).toBe(item.reversed)
        }
    })

    it('using spread operator', () => {
        for (let item of data) {
            expect(withSpreadOperator(item.string)).toBe(item.reversed)
        }
    })
})
