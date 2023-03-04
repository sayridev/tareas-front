import { Box, Button, Checkbox, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik, Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { MyTextInput } from '../../components/MyTextInput';



export const NewTaskComponent = () => {


  return (
    <>
      <Typography>Formik Component</Typography>

      <Formik
        initialValues={{
          description: '',
          status: '',
          active: false,
          estado: 'Pendiente'
        }}
        onSubmit={(values, { }) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          description: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
          status: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('Requerido')
        })}
      >
        {
          ({ touched, errors, getFieldProps,resetForm }) => (
            <Form noValidate >
              {/* <TextField
                type="text"
                fullWidth
                label="descripcion"
                {...getFieldProps('description')}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              /> */}

              <MyTextInput
                label='descripcion' name='description'
              />

              <TextField
                type="text"
                fullWidth
                label="status"
                {...getFieldProps('status')}
                error={touched.status && Boolean(errors.status)}
                helperText={touched.status && errors.status}
              />
              <Field
                name="active"
                type="checkbox"
              />

              <Select

                label="Estado"
                {...getFieldProps('estado')}
              >
                <MenuItem value="Progreso">Progreso</MenuItem>
                <MenuItem value="Pendiente">Pendiente</MenuItem>
                <MenuItem value="Completado">Completado</MenuItem>
              </Select>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Guardar
              </Button>
              <Button
                type="button"
                onClick={()=>resetForm()}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Limpiar
              </Button>

            </Form>
          )
        }

      </Formik>


    </>

  )
}
