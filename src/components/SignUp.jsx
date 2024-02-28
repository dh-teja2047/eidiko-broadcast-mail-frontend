import React, { useState, useEffect } from 'react'
import { Box, Typography, TextField, Grid, Button, Stack, Alert, Snackbar } from '@mui/material'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import NavBar from './NavBar';

function SignUp() {

    const [open, setOpen] = React.useState(false);

    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
   

    const [userData, setUserData] = useState({
        "userName": "",
        "password": "",
    })

    const userNameRegex = /^[0-9A-Za-z]{1,10}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };

    // const userSignUp = () => {
    //     console.log(userData)
    //     axios
    //         .post('http://10.0.0.81:9099/eidiko/internal/userdata/create-user', userData,
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     // 'Accept': 'application/json'
    //                     // 'Authorization': `Bearer ${token}`
    //                 },
    //             })
    //         .then(response => {
    //             if (response.status === 200) {
    //                 console.log('API Success:', response.data);
    //                 localStorage.setItem('userCredentials', JSON.stringify(response.data))
    //                 setOpen(true);

    //             } else {
    //                 console.error('API Error:', response.statusText);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })

    // }

    const handleChange = (e, field) => {
        const inputValue = e.target.value;

        switch (field) {
            case 'userName':
                setUserNameError(!userNameRegex.test(inputValue));
                break;
            case 'password':
                setPasswordError(!passwordRegex.test(inputValue));
                break;
            default:
                break;
        }

        setUserData({ ...userData, [field]: inputValue });
    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    console.log(userData)
    return (
        // sx={{ display: { xs: 'block', sm: 'none ' } }}
        <Box sx={{width:{xs:'100%'}}}>
        {/* <NavBar /> */}
            <Stack
                container
                direction='column'
                margin='auto'
                alignItems='center'
                justifyContent='center'
                border='2px solid grey'
                spacing={2}
                sx={{  width: '500px', height: '600px' }}
            >
                <Typography variant={'h3'}>User Details</Typography>
                <TextField label="userName" value={userData.userName} onChange={(e) => handleChange(e, 'userName')} helperText={userNameError ? 'Invalid' : ''} error={userNameError}></TextField>
                <TextField label="password" value={userData.password} onChange={(e) => handleChange(e, 'password')} helperText={passwordError ? 'Invalid' : ''} error={passwordError} type='password'></TextField>

                {/* <Button onClick={userSignUp}>SignUP</Button> */}
                <Button >SignUP</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                    <Alert
                        onClose={handleCloseSnackBar}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        User Signed Up
                    </Alert>
                </Snackbar>
                <Button onClick={navigateToLogin}>Login</Button>
            </Stack>
        </Box>
    )
}

export default SignUp
