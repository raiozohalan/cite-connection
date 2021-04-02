import React from "react"
import { 
    Grid,
} from "@material-ui/core"
import FieldInput from "../_custom/input"

const Auth = ()=>{
    return(
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <FieldInput 
                        label = "Username"
                        required = { true }
                        fullWidth
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default Auth