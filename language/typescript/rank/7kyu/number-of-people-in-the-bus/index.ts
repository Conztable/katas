export function number(busStops: number[][]): number {
    const peopleOnTheBus = busStops
        .map((stop: number[]): number => {
            validateStop(stop);
            return stop[0] - stop[1];
        })
        .reduce((onTheBus: number, stopDifference: number) => (onTheBus += stopDifference), 0);
    return peopleOnTheBus > 0 ? peopleOnTheBus : 0;
}

const validateStop = (stop: number[]): void => {
    const constraintMessage = 'A stop is [on, off] where on >= 0 and off >=0.';
    if (stop[0] < 0) {
        throw new Error(
            `Invalid stop ${stop}. The number of people getting on to the bus must be positive. ${constraintMessage}`
        );
    }

    if (stop[1] < 0) {
        throw new Error(
            `Invalid stop ${stop}. The number of people getting off the bus must be positive. ${constraintMessage}`
        );
    }
};
