export function spinWords(s: string): string {
    const words = s.split(' ');
    const spun = words.map((word: string) => {
        if (word.length >= 5) return word.split('').reverse().join('');
        return word;
    });

    return spun.join(' ');
}
