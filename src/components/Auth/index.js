import React from "react"
import { 
    Grid,
    Hidden,
} from "@material-ui/core"
import FieldInput from "../_custom/Input"
import CustomButton from "../_custom/Button"

const Auth = ()=>{
    return(
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                    <div 
                        style={{
                            background: "blue",
                            height: "100%",
                            minHeight: "100%",
                            display: "block", 
                            position: 'relative'
                        }}
                    >s</div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                    <Grid container justify="center" style={{height: "100%"}}>
                        <Hidden only = {["xs", "sm"]}>
                            <div style={{marginTop: 100, display: "block", width: "100%"}}/>
                        </Hidden>
                        <Grid item xs={11} sm={11} md={7} lg={7} xl={7}>
                            <h2>LOGIN</h2>
                            <FieldInput 
                                label = "Username"
                                required = { true }
                                fullWidth
                                type = "text"
                                style= {{
                                    marginBottom: 20
                                }}
                            /> 
                            <FieldInput 
                                label = "Password"
                                required = { true }
                                fullWidth
                                type = "password" 
                            />
                            <CustomButton 
                                type="button"
                                onClick = {()=>alert()}
                                label = "LOGIN"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Auth