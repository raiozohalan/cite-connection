import React, { useState } from "react"
import { 
    Grid, 
} from "@mui/material"
import Button from "@mui/material/Button"
import { makeStyles } from "@mui/styles"
import { styled } from '@mui/material/styles';
import FieldInput from "../_custom/Input" 
import colors from "../../utils/colors"
import banner from "../../assets/banner-bg.png"
import bannerTrasnparent from "../../assets/banner-transparent.png"

const useStyles = makeStyles({
    container: { 
        background: colors.THEME,
        width: "100%",
        minHeight: "100%",
        position: "fixed", 
        padding: 20,
    },
    formContaienr: {
        background: "#3a4ef8", 
        height: "auto",
        boxShadow: "1px 1px 15px rgba(0,0,0,0.3)",
        borderRadius: 5,
        overflow: "hidden",
    },
    form: {
        background: colors.WHITE,
        padding: 30,
        height: 550,
        h2: {
            color: colors.THEME
        }
    },
    banner: {
        background: `url(${banner})`,
        backgroundSize: 'auto 100%',
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",
        backgroundPositionX: "center"
    },
    bannerContent: {
        width: "100%",
        height: "100%",
        background: `url(${bannerTrasnparent})`,
        backgroundSize: '100% auto',
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",
        backgroundPositionX: "center"
    },
    signUpBtn: {
        color: colors.THEME1,
        cursor: "pointer",
        "$:hover":{
            
        }
    }
})

const SubmitBtn = styled(Button)(({ theme }) => ({
    backgroundColor: colors.THEME,
    minWidth: 100,
    color: colors.WHITE,
    padding: 10,
    textTransform: "none",
    '&:hover': {
        backgroundColor: colors.THEME,
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)"
    },
    '&:disabled': {
        backgroundColor: colors.THEME2,
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)"
    },
  }));
const Auth = ()=>{
    const classes = useStyles();
    const [isLogin, setLogin] = useState(true)
    return (
      <>
        <Grid
          container
          className={classes.container}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={11}
            sm={11}
            md={10}
            lg={10}
            xl={10}
            className={classes.formContaienr}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={7}
                lg={7}
                xl={7}
                className={classes.banner}
              >
                <div className={classes.bannerContent}></div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
                xl={5}
                className={classes.form}
              >
                <h2 style={{ color: colors.THEME }}> 
                    { isLogin ? "LOG IN": "SIGN UP"}
                </h2>
                { isLogin && (
                    <>
                    <FieldInput
                        label="Full Name"
                        required={true}
                        fullWidth
                        type="text"
                        style={{
                            marginBottom: 20,
                        }}
                        />
                    </>
                )}
                <FieldInput
                  label="Username"
                  required={true}
                  fullWidth
                  type="text"
                  style={{
                    marginBottom: 20,
                  }}
                />
                <FieldInput
                  label="Password"
                  required={true}
                  fullWidth
                  type="password"
                  style={{
                    marginBottom: 20,
                  }}
                />
                <SubmitBtn onClick={() => alert()}>
                  {" "}
                  {isLogin ? "Log In" : "Sign Up"}{" "}
                </SubmitBtn>

                <p>
                  { isLogin ? "Don't have an account?" : "Already have a account?"}
                  <b
                    className={classes.signUpBtn}
                    onClick={() => {
                      setLogin(!isLogin);
                    }}
                  >
                    {!isLogin ? " Log In" : " Sign Up"}
                  </b>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
}
export default Auth