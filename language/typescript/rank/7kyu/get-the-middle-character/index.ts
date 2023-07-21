export function getMiddle(s: string): string {
    if (s.length <= 1) return s;

    const isEven: boolean = s.length % 2 === 0;

    if (isEven) {
        const middleIndex: number = s.length / 2;
        return s.substring(middleIndex - 1, middleIndex + 1);
    }

    return s.at(s.length / 2) || '';
}
