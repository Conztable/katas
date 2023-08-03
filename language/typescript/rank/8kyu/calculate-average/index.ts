export function findAverage(array: number[]): number {
    if (!array.length) return 0;
    return array.reduce((sum, num) => (sum += num), 0) / array.length;
}
