import React from "react"
import {
    TextField,
} from "@material-ui/core"
import "./style.css"

const FieldInput = (props) => {
    const {
        value,
        onChange,
        label,
        labelColor,
        required,
        fullWidth,
        ...rest
    } = props
    return(
        <>
            <label class="TextFieldLabel" style={{color: labelColor}}>{label}{required && (<b style={{color: "red"}}>*</b>)}</label>
            <TextField
                {...rest}
                value = { value }
                onChange = { onChange } 
                required = { required }
                variant = "outlined"
                fullWidth = { fullWidth }
            />
        </>
    )
}

export default FieldInput