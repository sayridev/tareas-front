import { CssBaseline, ThemeProvider } from '@mui/material'
import  { FC, PropsWithChildren } from 'react'
import { purpleTheme } from './purpleTheme';

export const AppTheme:FC<PropsWithChildren> = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
