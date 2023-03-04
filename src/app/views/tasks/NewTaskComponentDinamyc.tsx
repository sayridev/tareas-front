import { Box, Button, Checkbox, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik, Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { MyTextInput } from '../../components/MyTextInput';
import fromJson from "../../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of fromJson) {
  initialValues[input.name] = input.value

  if ( !input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
      if ( rule.type === 'required'){
          schema = schema.required(`El campo ${input.label} es requerido`)
      }
      // otras reglas....
  }

  requiredFields[input.name] = schema;
}


const validationSchema = Yup.object({...requiredFields});


export const NewTaskComponentDinamyc = () => {



  return (
    <>
      <Typography>Formulario Dinamico</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {
          ({ getFieldProps }) => (
            <Form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
              {
                fromJson.map(({ type, name, placeholder, label,options }) => {
                  if (type === 'input' || type === 'password' || type === 'email') {
                    return <MyTextInput
                      sx={{marginTop:2}}
                      key={name}
                      type={(type as any)}
                      name={name}
                      label={label}
                      placeholder={placeholder}
                    />
                  } else if (type === 'select') {
                    return (
                      <Select
                        style={{marginTop:2}}
                        fullWidth
                        key={name}
                        label={label}
                        {...getFieldProps(name)}
                      >
                        <MenuItem value="no-select">Selecciona una opcion</MenuItem>
                        {
                          options?.map(({id,label})=>(

                            <MenuItem key={id} value={id}>{label}</MenuItem>
                          ))
                        }
                      </Select>
                    )
                  }
                  return <span>Type:{type} no es soportado</span>
                })}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Guardar
              </Button>
            </Form>
          )
        }
      </Formik>
    </>

  )
}
