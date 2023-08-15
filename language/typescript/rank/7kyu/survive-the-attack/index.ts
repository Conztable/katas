export const hasSurvived = (attackers: number[], defenders: number[]): boolean => {
    const initialAttackPower = attackers.reduce(
        (totalPower: number, soldierPower: number): number => (totalPower += soldierPower),
        0
    );
    const initialDefensePower = defenders.reduce(
        (totalPower: number, soldierPower: number): number => (totalPower += soldierPower),
        0
    );

    const defense = [...defenders];
    const attack = attackers.map((attacker: number, idx: number): number => {
        if (!defense[idx]) {
            return attacker;
        }

        const fightResult = attacker - defense[idx];

        if (fightResult > 0) {
            defense[idx] = 0;
            return fightResult;
        }

        defense[idx] = Math.abs(fightResult);
        return 0;
    });

    const defendersRemaining: number = defense.filter(Boolean).length;
    const attackersRemaining: number = attack.filter(Boolean).length;

    if (defendersRemaining > attackersRemaining) return true;
    if (defendersRemaining === attackersRemaining) return initialDefensePower >= initialAttackPower;
    return false;
};
