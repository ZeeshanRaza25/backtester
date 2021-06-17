import React from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase/app";
import "firebase/auth";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      marginTop: theme.spacing(4),
      width: 200,
    },
  },
}));


const Login: React.FC = () => {
  React.useEffect(() => {
    const authUI = new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = ({
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          disableSignUp: { status: true },
          requireDisplayName: false,
          signInMethod: firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
        }
      ]
    });
    authUI.start("#firebaseui-auth-container", uiConfig)
  });
  const classes = useStyles();

  return (
    <div
    //  id="firebaseui-auth-container"
    >
      {/* login page */}
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
        className={classes.root}
      >
        <Grid item xs>
          <TextField
            label="Email"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs>
          <TextField
            label="Password"
            id="outlined-size-normal"
            defaultValue=""
            variant="outlined"
            type="password"
          />
        </Grid>
        <Grid item xs>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>

    </div>
  );
};

export { Login };