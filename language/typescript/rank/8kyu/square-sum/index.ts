export function squareSum(numbers: number[]): number {
    return numbers.reduce((sum: number, num: number): number => (sum += Math.pow(num, 2)), 0);
}
