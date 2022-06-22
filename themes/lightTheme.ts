// 1. Import `createTheme`
import { createTheme } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {}, // optional
  }
})