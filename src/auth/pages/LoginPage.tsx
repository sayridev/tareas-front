import { Box, Button, Grid, Link, TextField } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginUser } from '../../interfaces';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { MyTextInput } from '../../app/components/MyTextInput';




export const LoginPage = () => {

const navigate = useNavigate()
const {login,checkAuth} = useContext(AuthContext)

const loginUser = async (loginUser:LoginUser)=>{
 const resp = await login(loginUser);
 if( resp ){
    setTimeout(() => {
        
        location.reload();
    }, 1);
 }
 console.log(resp);
}

    return (
        <AuthLayout title='Login'>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => {
                    loginUser(values)
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email('El email es incorrecto').required('El email es requerido'),
                    password: Yup.string().min(6, 'El password debe tener al menos 6 caracteres').required('El password es requerido')
                })}
            >
                {
                    ({ resetForm }) => (
                        <Form noValidate >


                            <MyTextInput
                                label='Email' name='email' sx={{ marginTop: 2 }}
                            
                            />
                            <MyTextInput
                                label='Password' type='password' name='password' sx={{ marginTop: 2 }}
                            />



                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>

                            <Grid container sx={{ justifyContent: 'right' }}>
                                <Grid item>
                                    <Link component={RouterLink} to="/auth/register" variant="body2">
                                        {"No tienes una cuenta? Registrate"}
                                    </Link>
                                </Grid>
                            </Grid>

                        </Form>
                    )
                }

            </Formik>


        </AuthLayout>
    )
}
