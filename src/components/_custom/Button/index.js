import { 
    Button,
    IconButton
} from "@mui/material"

import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    button: { 
        color: "white",
        padding: 10, 
        width: 100,
    },

    iconButton: { 
        color: "white",
        padding: 10, 
        width: 100
    },
    iconButtonDisabled: {
        background: "grey",
        color: "white",
        padding: 10, 
    }
})

const CustomButton = (props) => {
    const {
        type,
        label, 
        ...rest
    } = props

    const classes = useStyles()
    return(
        type === "button" ? (
            <Button {...rest} className={classes.button}>
                {label}
            </Button>
        ) : (
            <IconButton {...rest} className={classes.iconButton}>
                {label}
            </IconButton>
        )
    )
}

export default CustomButton