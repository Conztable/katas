export function getVowelCount(str: string): number {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    const count: number = str.split('').filter((char) => vowels.includes(char.toLowerCase())).length;

    return count;
}
