
export type ExtractListType<T> = T[];
export type ExtractReturnType<T, K extends keyof T> = T[K][];

export type ExtractValues = <T, K extends keyof T>(
    listOfData: ExtractListType<T>,
    valueToCatch: K
  ) => ExtractReturnType<T, K>;