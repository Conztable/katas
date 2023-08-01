import { getVowelCount } from './index.ts';

/**
 * @group 7kyu/typescript
 * @group typescript
 */

describe('7kyu - getVowelCount', () => {
    it('should return the total number of vowels in a given string', () => {
        const inputString: string = 'How many vowels are in this string';
        const expectedResult: number = 9;

        expect(getVowelCount(inputString)).toBe(expectedResult);
    });

    it('should return 0 if given an empty string', () => {
        expect(getVowelCount('')).toBe(0);
    });

    it('should not include the letter y in the vowel count', () => {
        const inputString: string = 'aeiouy';
        const expectedResult: number = 5;

        expect(getVowelCount(inputString)).toBe(expectedResult);
    });
});
