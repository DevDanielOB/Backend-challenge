import { ExtractReturnType, ExtractValues } from "../types/extractValues.types"

export const extractValues: ExtractValues = (listOfData, valueToCatch) => {
    const extractedValues: ExtractReturnType<
    typeof listOfData[number],
    typeof valueToCatch
    > = []

    if (listOfData.length === 0) {
      console.error('Empty array input')
    }

    for (const item of listOfData) {
      const value = item[valueToCatch]

        if (value !== undefined) {
          extractedValues.push(value)
        }
      }

    return extractedValues
}




// For direct testing without automated tests (uncomment the following block)- Use:
// yarn ts-node src/typescript/extractValues.ts

// const data = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//   ]
  
//   const result = extractValues(data, 'name')
//   console.log(result)

