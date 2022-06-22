// 1. Import `createTheme`
import { createTheme } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // optional
  }
})
