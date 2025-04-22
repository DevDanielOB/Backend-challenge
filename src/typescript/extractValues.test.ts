import { extractValues } from './extractValues';

describe('extractValues', () => {
    it('should extract the specified property values from the list of objects', () => {
        const data = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];
        const result = extractValues(data, 'name');
        expect(result).toEqual(['Alice', 'Bob', 'Charlie']);

        console.log('\n[TEST 1] Extracting "name":');
        console.table(result);
    });

    it('should return an empty array if the property does not exist in any object', () => {
        const data = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];
        const result = extractValues(data, 'age' as any);
        expect(result).toEqual([]);

        console.log('\n[TEST 2] Undefined property: "age":');
        console.table(result);
    });

    it('should handle an empty array input', () => {
        const data: { id: number; name: string }[] = [];
        const result = extractValues(data, 'name');
        expect(result).toEqual([]);

        console.log('\n[TEST 3] Empty array input:');
        console.table([{ input: '[]', extractedValue: '[]' }]);
    });

    it('should ignore undefined values in the objects', () => {
        const data = [
            { id: 1, name: 'Alice' },
            { id: 2 },
            { id: 3, name: 'Charlie' }
        ];
        const result = extractValues(data, 'name');
        expect(result).toEqual(['Alice', 'Charlie']);

        console.log('\n[TEST 4] Ignoring undefined values:');
        console.table(result);
    });
});
