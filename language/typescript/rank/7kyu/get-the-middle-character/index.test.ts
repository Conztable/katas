import { getMiddle } from './index.ts';

/**
 * @group 7kyu/typescript
 * @group typescript
 */
describe('7kyu - get the middle character(s)', () => {
    it('should return an empty string if a falsy value is provided', () => {
        expect(getMiddle('')).toBe('');
    });

    it('should return the string if there is only one character', () => {
        expect(getMiddle('a')).toBe('a');
    });

    it('should return two characters if the string is only two characters', () => {
        expect(getMiddle('ab')).toBe('ab');
    });

    it('should return a single middle character if the string has an odd number of characters', () => {
        const testString = 'sixteen';
        const expectedResult = 't';

        expect(getMiddle(testString)).toBe(expectedResult);
    });

    it('should return two middle characters if the string has an even number of characters', () => {
        const testString = 'middle';
        const expectedResult = 'dd';

        expect(getMiddle(testString)).toBe(expectedResult);
    });
});
