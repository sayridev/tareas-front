import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette:{
        primary:{
            main:'#F81190'
        },
        secondary:{
            main:'#650FD9',
        },
        error:{
            main:red[400]
        }
    }
})