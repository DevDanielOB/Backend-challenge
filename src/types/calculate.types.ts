export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export type Calculate = (operation: Operation, a: number, b: number) => number