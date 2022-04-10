import React from 'react'
import GoogleLogo from '../assets/Google.png';
import {Box, Button, Card, Typography, TextField} from "@mui/material";
import {styled} from "@mui/material";
import {loginApi} from "../services/authentication"

const LoginBox = styled(Card)(({theme}) => ({
    boxShadow: theme.shadows[5],
    height: "25rem",
    width: "26rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: 'all, 0.2s ease',
    display: "flex",
    flexDirection: "column",
    padding: '50px 20px',
    [theme.breakpoints.down('sm')]: {boxShadow: "none"},
}));
const GoogleIcon = styled(Box)({width: "80px"});
const StyledBox = styled(Box)({
    width: "100%",
    '&:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3)':{display: "flex", marginBottom: "auto"},
    '&:nth-of-type(1)':{flexDirection: "column", justifyContent: "space-around", height: "100px"},
    "&:nth-of-type(2)":{flexDirection: "column", justifyContent: "space-around",},
    "&:nth-of-type(3)":{flexDirection: "row", justifyContent: "space-between",}
});

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[-.+_]?[a-zA-Z0-9]+[@][a-z0-9]+[.][a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

export default function LogIn() {
    const [data, setData] = React.useState({email: '', password: ''})

    const [emailErr, setEmailErr] = React.useState(false)
    const [passwordErr, setPasswordErr] = React.useState(false)

    const emailValidate = emailRegex.test(data.email)
    const passwordValidate = passwordRegex.test(data.password)
    const onSubmit = () => {
        // validate email
        setEmailErr(false)
        setPasswordErr(false)

        // validate password
        if (!emailValidate) setEmailErr(true);
        if (!passwordValidate) setPasswordErr(true);

        // access login api with validated data
        if (emailValidate && passwordValidate) {
            loginApi(data)
                .then(res=>localStorage.setItem('access', res.data.access))
                .catch(err=>console.log(err))
        }
    }
    return (
        <Box>
            <LoginBox>
                <StyledBox>
                    <GoogleIcon component={"img"} src={GoogleLogo} alt="logo"/>
                    <Typography variant={"h6"} align={"left"}>Sign In</Typography>
                    <Typography variant={"subtitle1"} align={"left"}>Use your Google Account</Typography>
                </StyledBox>
                <StyledBox>
                    <TextField
                        id="email" label="Email" variant="outlined" size='small'
                        sx={{marginBottom: 2}}
                        fullWidth
                        onChange={e => setData({...data, email: e.target.value})}
                        error={emailErr}
                        helperText={emailErr ? 'Enter the correct email!!!' : 'user@email.com'}
                    />
                    <TextField
                        type="password" id="password" label="Password" variant="outlined" size='small'
                        fullWidth
                        onChange={e => setData({...data, password: e.target.value})}
                        error={passwordErr}
                        helperText={passwordErr ? 'Enter the correct password!!!' : "[AZ]-[az]-[09]-[!@#$%^&*])"}/>
                </StyledBox>
                <StyledBox>
                    <Button color="error" variant="outlined" size='small'>Forget Password</Button>
                    <Button variant="outlined" size='small'>Create account</Button>
                    <Button variant="contained" size='small' onClick={onSubmit}>SignIn</Button>
                </StyledBox>
            </LoginBox>
        </Box>
    )
}
