import { number } from './index.ts';
/**
 * @group 7kyu/typescript
 * @group typescript
 */
describe('7kyu - number of people in the bus', () => {
    it('should never return a negative number of people', () => {
        // bus starts with 0 people, "one" gets off
        const test = [[0, 1]];
        expect(number(test)).toBe(0);
    });

    it('should throw an error if a negative number of people get on the bus', () => {
        const test = [[-1, 0]];
        const expectedErrorMessage = `Invalid stop ${test[0]}. The number of people getting on to the bus must be positive. A stop is [on, off] where on >= 0 and off >=0.`;

        expect(() => number(test)).toThrowError(expectedErrorMessage);
    });

    it('should throw an error if a negative number of people get off the bus (double negative)', () => {
        const test = [[0, -1]];
        const expectedErrorMessage = `Invalid stop ${test[0]}. The number of people getting off the bus must be positive. A stop is [on, off] where on >= 0 and off >=0.`;
    });

    it('should return the correct number of people on the bus after N stops', () => {
        const test = [
            [10, 0],
            [3, 5],
            [5, 8],
        ];
        const expected = 5;

        expect(number(test)).toBe(expected);
    });
});
