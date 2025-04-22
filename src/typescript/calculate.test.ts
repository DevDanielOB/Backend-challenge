import { calculate } from './calculate';

describe('calculate', () => {
    it('should add two numbers correctly', () => {
        const result = calculate('add', 2, 3);
        expect(result).toBe(5);

        console.log('\n[TEST 1] Addition of 2 + 3:');
        console.table([{ operation: 'add', a: 2, b: 3, result }]);
    });

    it('should subtract two numbers correctly', () => {
        const result = calculate('subtract', 5, 3);
        expect(result).toBe(2);

        console.log('\n[TEST 2] Subtraction of 5 - 3:');
        console.table([{ operation: 'subtract', a: 5, b: 3, result }]);
    });

    it('should multiply two numbers correctly', () => {
        const result = calculate('multiply', 4, 3);
        expect(result).toBe(12);

        console.log('\n[TEST 3] Multiplication of 4 * 3:');
        console.table([{ operation: 'multiply', a: 4, b: 3, result }]);
    });

    it('should divide two numbers correctly', () => {
        const result = calculate('divide', 6, 2);
        expect(result).toBe(3);

        console.log('\n[TEST 4] Division of 6 / 2:');
        console.table([{ operation: 'divide', a: 6, b: 2, result }]);
    });

    it('should throw an error when dividing by zero', () => {
        console.log('\n[TEST 5] Division by zero:');
        try {
            calculate('divide', 6, 0);
        } catch (error: any) {
            console.table([{ operation: 'divide', a: 6, b: 0, error: error.message }]);
            expect(error.message).toBe('Division by zero: attempted to divide 6 by 0');
        }
    });
});
