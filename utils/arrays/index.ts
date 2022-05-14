export const mergeArraysProperties = <T, U>(arr1: T[], arr2: U[]): (T & U)[] => {
  const arraysInOrder = [arr1, arr2].sort((arr1, arr2) =>
    arr1.length < arr2.length ? -1 : 0
  )

  const newArray = []

  for (const item of arraysInOrder[0]) {
    for (const item2 of arraysInOrder[1]) {
      const newItem = Object.assign({}, item, item2) as T & U
      newArray.push(newItem)
    }
  }

  return newArray
}
