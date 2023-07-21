import { dnaStrand } from '.';

/**
 * @group 7kyu/typescript
 * @group typescript
 */
describe('7kyu - complementary DNA', () => {
    it('should return the complementary dna strand', () => {
        const testStrand = 'ATTCG';
        const expectedResult = 'TAAGC';

        expect(dnaStrand(testStrand)).toBe(expectedResult);
    });

    it('should return an empty string if the strand is empty', () => {
        expect(dnaStrand('')).toBe('');
    });

    it('should return an empty string if the strand is null', () => {
        expect(dnaStrand()).toBe('');
    });
});
