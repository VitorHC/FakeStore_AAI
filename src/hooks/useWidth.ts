import { Dimensions } from "react-native"

export const useWidth = (numColumns: number) => {
    const screenWidth = Dimensions.get("window").width
    const spacing = 16

   return (screenWidth - spacing * (numColumns + 1)) / numColumns
}