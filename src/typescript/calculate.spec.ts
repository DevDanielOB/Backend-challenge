import { extractValues } from './calculate';

describe('extractValues', () => {
    it('should extract the specified property values from the list of objects', () => {
        const data = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];
        const result = extractValues(data, 'name');
        expect(result).toEqual(['Alice', 'Bob', 'Charlie']);


    });

    it('should return an empty array if the property does not exist in any object', () => {
        const data = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];
        const result = extractValues(data, 'age' as any);
        expect(result).toEqual([]);
    });

    it('should handle an empty array input', () => {
        const data: { id: number; name: string }[] = [];
        const result = extractValues(data, 'name');
        expect(result).toEqual([]);
    });

    it('should extract values of different types', () => {
        const data = [
            { id: 1, active: true },
            { id: 2, active: false },
            { id: 3, active: true }
        ];
        const result = extractValues(data, 'active');
        expect(result).toEqual([true, false, true]);
    });

    it('should ignore undefined values in the objects', () => {
        const data = [
            { id: 1, name: 'Alice' },
            { id: 2 },
            { id: 3, name: 'Charlie' }
        ];
        const result = extractValues(data, 'name');
        expect(result).toEqual(['Alice', 'Charlie']);
    });
});