export function findEvenIndex(arr: number[]): number {
    let index: number = -1;

    arr.some((_, idx) => {
        const leftSide: number = sumArray(arr.slice(0, idx));
        const rightSide: number = sumArray(arr.slice(idx + 1));
        if (leftSide === rightSide) {
            index = idx;
            return true;
        }
        return false;
    });

    return index;
}

const sumArray = (arr: number[]): number => {
    return arr.reduce((acc, curr) => (acc += curr), 0);
};
