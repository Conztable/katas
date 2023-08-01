import { makeUpperCase } from './index.ts';

/**
 * @group 8kyu/typescript
 * @group typescript
 */
describe.only('8kyu - Make Uppercase', () => {
    it('should return a given string with the entire string in uppercase', () => {
        const testString = "whatchu talkin' 'bout Willace?";
        const expectedResult = "WHATCHU TALKIN' 'BOUT WILLACE?";

        expect(makeUpperCase(testString)).toBe(expectedResult);
    });

    it('if given a falsy value, should return an empty string', () => {
        expect('').toBe('');
    });
});
