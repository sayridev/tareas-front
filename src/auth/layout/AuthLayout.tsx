import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FC, PropsWithChildren } from 'react';

interface Props{
    title: string;
}

export const AuthLayout:FC<PropsWithChildren<Props>> = ({title, children}) => {
  return (
    <Grid container spacing={0} direction="column" alignContent="center" justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'secondary.main', padding: 4 }}
        >
    <Box
    maxWidth={400}
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon  />
        </Avatar>
        <Typography component="h1" variant="h5">
           {title}
        </Typography>
        {children}
      
    </Box>
   
</Grid>
  )
}
