export function extractValues<T, K extends keyof T>(listOfData: T[], valueToCatch: K): T[K][] {
    const extractedValues: T[K][] = []

    for (const item of listOfData) {
        const value = item[valueToCatch]

        if (value !== undefined) {
            extractedValues.push(value)
        }
    }

    return extractedValues
}

console.log(extractValues([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }], 'name'))

