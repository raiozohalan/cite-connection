import { Button, IconButton, makeStyles } from "@material-ui/core" 

const useStyles = makeStyles( theme => ({
    button: { 
        background: "green",
        color: "white",
        padding: 10, 
    },
    buttonDisabled: {
        background: "grey",
        color: "white",
        padding: 10, 
    }

}))

const CustomButton = (props) => {
    const {
        type,
        label,
        disabled,
        ...rest
    } = props

    const classes = useStyles( { disabled } )
    return(
        type === "button" ? (
            <Button {...rest} className={classes.button} disabled={disabled}>
                {label}
            </Button>
        ) : (
            <IconButton {...rest} className={classes.button}  disabled={disabled}>
                {label}
            </IconButton>
        )
    )
}

export default CustomButton