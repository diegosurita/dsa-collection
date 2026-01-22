
import { twoSum } from './index.ts';

test('twoSum should return indices of two numbers that add up to target', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});