import { spinWords } from './index.ts';

/**
 * @group 6kyu/typescript
 * @group typescript
 */
describe('6kyu - Stop gninnipS My sdroW', () => {
    it("should reverse a word if it's length is >= 5 letters", () => {
        const test = 'alpha';
        const expected = test.split('').reverse().join('');
        expect(spinWords(test)).toBe(expected);
    });

    it('should do nothing if a word is <5 letters long', () => {
        const test = 'bit';
        const expected = 'bit';
        expect(spinWords(test)).toBe(expected);
    });

    it('should appropriately spin only words >= 5 letters long within a sentence', () => {
        const test = 'This is another test';
        const expected = 'This is rehtona test';
        expect(spinWords(test)).toBe(expected);
    });
});
