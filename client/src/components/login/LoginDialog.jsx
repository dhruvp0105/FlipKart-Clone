import React, { useContext, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography, styled } from '@mui/material';
import { authenticateLogin, authenticateSignup } from '../../service/api';
import { DataContext } from '../context/DataProvider';

const Component = styled(Box)`
    height:70vh;
    width:95vh
`
const Image = styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:82%;
    width:28%;
    padding:45px 35px;
    &>h5{
        color:#FFFFFF;
        font-weight:600;
    };
    &>p{
        color:#dbdbdb;
    }

`
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    &>div,&>button,&>p{
        margin-top:16px;
    }
`
const LoginButton = styled(Button)`
    text-transform:none;
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
`
const RequestOTP = styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%)
`
const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`
const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer
`
const Error=styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`

const accountInitializeValue = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitializeValues = {
    name: '',
    uname: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitializeValues = {
    email: '',
    password: ''
}
const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitializeValue.login);

    const [signup, setSignup] = useState(signupInitializeValues);

    const { setAccount } = useContext(DataContext);

    const [login, setLogin] = useState(loginInitializeValues);

    const [error, setError] = useState(false);

    const toggleSignup = () => {
        toggleAccount(accountInitializeValue.signup)
    }

    const toggleSignin = () => {
        toggleAccount(accountInitializeValue.login)
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitializeValue.login);
        setError(false);
    }

    const onInputChange = (e) => {
        console.log(e);
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        })
        // console.log(signup);
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.name);
    }

    const onValueChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (response.status === 200) {
            handleClose();
            setAccount(response.data.data.name)
        }
        else{
            setError(true);
        }
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}> {/* when we clicked anywhere dialog will be close... */}
                <Component>
                    <Box style={{ display: 'flex', height: '100%' }}>
                        <Image>
                            <Typography variant='h5'>{account.heading}</Typography>
                            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                        </Image>
                        {
                            account.view === 'login' ?
                                <Wrapper>
                                    <TextField variant="standard" onChange={(e) => onValueChange(e)} name='email' label='Enter Email/Mobile number' />
                                    {
                                        error && <Error>Please enter valid email or password</Error>
                                    }
                                    <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                    <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                                    <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                    <RequestOTP>Request OTP</RequestOTP>
                                    <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                                </Wrapper>
                                :
                                <Wrapper>
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name="name" label='Enter Name' />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name="uname" label='Enter Username' />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label='Enter Email' />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label='Enter Password' />
                                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label='Enter Phone' />
                                    <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                                    <RequestOTP onClick={() => toggleSignin()}>Existing User? Log in</RequestOTP>

                                </Wrapper>
                        }
                    </Box>
                </Component>
            </Dialog>
        </>
    )
}

export default LoginDialog