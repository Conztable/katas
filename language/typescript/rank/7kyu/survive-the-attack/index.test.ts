import { hasSurvived } from './index.ts';
/**
 * @group 7kyu/typescript
 * @group typescript
 */
describe('7kyu - survive the attack', () => {
    it('should return true if the number of survivors is equal and the defenders have the higher initial power', () => {
        const attackers = [1, 1, 1, 51, 51, 51];
        const defenders = [99, 99, 99, 50, 50, 50];

        expect(hasSurvived(attackers, defenders)).toBe(true);
    });

    it('should return true if defenders win', () => {
        const attackers = [1, 3, 5, 7];
        const defenders = [2, 4, 6, 8];
        expect(hasSurvived(attackers, defenders)).toBe(true);
    });

    it('should return false if attackers win', () => {
        const attackers = [32, 65, 21, 83, 85, 7, 71, 45, 20, 63];
        const defenders = [83, 44, 38, 55, 84, 80, 58, 20, 4, 74];
        expect(hasSurvived(attackers, defenders)).toBe(false);
    });
});
