import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function Login() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <label >Login </label>
            <div>
                <TextField
                    required
                    id="Name"
                    label="user name"
                    defaultValue="User Name"
                    variant="outlined"
                />
                <TextField
                    disabled
                    id="password"
                    label="password"
                    defaultValue="Password"
                    variant="outlined"
                />

            </div>
            <div>
                <Button variant="contained" color="primary" Login>
                    Login
                </Button>
            </div>
            <div>
                <Typography className={classes.root}>
                    <Link href="#" onClick={preventDefault}>
                        forgot UserName\Password
                    </Link>
                </Typography>
            </div>
        </form>
    );
}


