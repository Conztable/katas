import { findAverage } from './index.ts';
/**
 * @group 8kyu/typescript
 * @group typescript
 */
describe('8kyu - calculate average', () => {
    it('should return zero if the array is empty', () => {
        expect(findAverage([])).toBe(0);
    });

    it('should calcaulate the average for a given set of numbers', () => {
        const test = [1, 2, 3, 4, 5];
        const expected = 3;
        expect(findAverage(test)).toBe(expected);
    });
});
