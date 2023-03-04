import { Box, Button, TextField } from '@mui/material';
import {useFormik}  from "formik";
import * as Yup from 'yup';



export const NewTask = () => {
  const {handleChange,values,handleSubmit,touched,errors,getFieldProps} = useFormik({
    initialValues:{
      description: '',
      status:''
    },
    onSubmit:values => {
      console.log(values)
    },
    validationSchema: Yup.object({
      description:Yup.string().max(15,'Debe tener 15 caracteres o menos').required('Requerido'),
      status:Yup.string().max(10,'Debe tener 10 caracteres o menos').required('Requerido')
    })
  });

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
                type="text"
                fullWidth
                label="descripcion"
                { ...getFieldProps('description')}
                // margin="normal"
                // required
                // fullWidth
                // id="description"
                // autoFocus 
                // onChange={handleChange}
                // value={values.description}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
                />
            <TextField
                margin="normal"
                id="status"
                required
                fullWidth
                onChange={handleChange}
                value={values.status}
                error={touched.status && Boolean(errors.status)}
                helperText={touched.status && errors.status}
                />
      
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
               Guardar
            </Button>
           
    </Box>
  )
}
