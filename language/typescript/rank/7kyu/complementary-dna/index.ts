export function dnaStrand(dna?: string): string {
    const mapping: Record<string, string> = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C',
    };

    const complement: string =
        dna
            ?.split('')
            .map((strand) => mapping[strand])
            .join('') ?? '';

    return complement;
}
