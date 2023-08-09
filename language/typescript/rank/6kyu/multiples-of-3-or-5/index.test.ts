import { solution } from './index.ts';
/**
 * @group 6kyu/typescript
 * @group typescript
 */
describe('6kyu - multiples of 3 or 5', () => {
    it('should return 0 if the number given is <0', () => {
        expect(solution(-1)).toBe(0);
    });

    it('should return 0 if the number passed in is <3', () => {
        expect(solution(2)).toBe(0);
    });

    it('should return the sum of multiples of 3 or 5', () => {
        const test = 10;
        const expected = 23;
        expect(solution(test)).toBe(expected);
    });
});
