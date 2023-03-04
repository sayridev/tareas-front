import { Box, Button, Grid, Link, TextField } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crea una cuenta'>
    <Box component="form"  noValidate sx={{ mt: 1 }}>
         <TextField
             margin="normal"
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoComplete="email"
             autoFocus />
         <TextField
             margin="normal"
             required
             fullWidth
             name="password"
             label="Password"
             type="password"
             id="password"
             autoComplete="current-password" />
   
         <Button
             type="submit"
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 }}
         >
             Sign In
         </Button>
         <Grid container sx={{justifyContent:'right'}}>
             <Grid item>
                 <Link component={RouterLink} to="/auth/login" variant="body2">
                     {"Ya tienes una cuenta? Inicia Sesion"}
                 </Link>
             </Grid>
         </Grid>
     </Box>
 </AuthLayout>
  )
}
