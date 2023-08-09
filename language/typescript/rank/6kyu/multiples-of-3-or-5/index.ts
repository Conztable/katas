export function solution(number: number): number {
    if (number < 3) {
        return 0;
    }

    let sum: number = 0;
    for (let i: number = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}
