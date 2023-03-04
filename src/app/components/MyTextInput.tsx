import { TextField } from "@mui/material"
import { useField } from "formik";
import { FC, PropsWithChildren } from 'react';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
    sx?:React.CSSProperties

}

export const MyTextInput: FC<PropsWithChildren<Props>> = ({ label, sx, ...props }: Props) => {
    const [field,meta] = useField(props)
    return (
        <TextField
           sx={sx}
            {...props}
            label={label}
            fullWidth
            {...field}
            error={( meta.error !== undefined )}
            helperText={meta.error}
        />
    )
}
