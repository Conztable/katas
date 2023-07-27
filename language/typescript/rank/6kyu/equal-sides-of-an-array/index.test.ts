import { findEvenIndex } from '.';

/**
 * @group 6kyu/typescript
 * @group typescript
 */
describe('6kyu - findEvenIndex', () => {
    it('should return -1 if there is no index where left side === right side', () => {
        const testArray = [1, 2, 5];
        expect(findEvenIndex(testArray)).toBe(-1);
    });

    it('should return the index where the left side of the index === the right side of the index', () => {
        const testArray1 = [1, 2, 3, 4, 3, 2, 1];
        const testArray2 = [1, 100, 50, -51, 1, 1];
        const testArray3 = [20, 10, -80, 10, 10, 15, 35];
        expect(findEvenIndex(testArray1)).toBe(3);
        expect(findEvenIndex(testArray2)).toBe(1);
        expect(findEvenIndex(testArray3)).toBe(0);
    });
});
