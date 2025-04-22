import { makeAllPositive } from './makeAllPositive';

describe('makeAllPositive', () => {
    it('should return all positive numbers when input has only positives', () => {
        const input = [1, 2, 3, 4, 5];
        const result = makeAllPositive(input);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should convert all negative numbers to positive', () => {
        const input = [-1, -2, -3, -4, -5];
        const result = makeAllPositive(input);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should correctly handle a mix of negative and positive numbers', () => {
        const input = [-1, 2, -3, 4, -5];
        const result = makeAllPositive(input);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array when given an empty array', () => {
        const input: number[] = [];
        const result = makeAllPositive(input);
        expect(result).toEqual([]);
    });
});
