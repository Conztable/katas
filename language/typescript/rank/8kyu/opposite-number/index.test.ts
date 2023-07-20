import oppositeNumber from './index';

/**
 * @group 8kyu/typescript
 * @group typescript
 */
describe('8kyu - Opposite Number', () => {
    it('should return 0 when given 0', () => {
        expect(oppositeNumber(0)).toBe(0);
    });

    it('should return negative when given a positive int', () => {
        expect(oppositeNumber(2)).toBe(-2);
    });

    it('should return positive when given a negative int', () => {
        expect(oppositeNumber(-2)).toBe(2);
    });

    it('should return negative when given a positive float', () => {
        expect(oppositeNumber(4.25)).toBe(-4.25);
    });

    it('should return positive when given a negative float', () => {
        expect(oppositeNumber(-4.25)).toBe(4.25);
    });
});
