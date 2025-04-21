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
