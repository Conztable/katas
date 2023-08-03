import { squareSum } from './index.ts';
/**
 * @group 8kyu/typescript
 * @group typescript
 */
describe('8kyu - square sum', () => {
    it('should return 0 for an empty array', () => {
        expect(squareSum([])).toBe(0);
    });

    it('should sum the squares of numbers in the test array', () => {
        const test = [1, 2, 2];
        const expected = 9;
        expect(squareSum(test)).toBe(expected);
    });

    it('should sum the squares of very large numbers', () => {
        const test = [109209, 439802, 9999999];
        const expected = 100205332404886;
        expect(squareSum(test)).toBe(expected);
    });
});
