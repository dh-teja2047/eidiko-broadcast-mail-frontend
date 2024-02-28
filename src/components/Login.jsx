import React, { useState, useEffect } from 'react'
import SignUp from './SignUp'
// import UserProfile from './UserProfile';
import { Box, Typography, TextField, Grid, Button, Stack } from '@mui/material'
import { useNavigate } from "react-router-dom";
import CustomTextField from './CustomTextFiled';


import axios from 'axios';
// import NavBar from './NavBar';


function Login() {


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const navigateToSignUp = () => {
        navigate('/signup');
    };

    // const navigateToUserProfile = () => {
    //     navigate('/userprofile');
    // };

    const handleChange = (e, field) => {
        if (field === 'userName') {
            setUserName(e.target.value);
        } else if (field === 'password') {
            setPassword(e.target.value);
        }
    };

    // const login = () => {
    //     console.log(userName, password)
    //     let item = { "userName": userName, "password": password }
    //     let result = axios
    //         .post('http://10.0.0.128:9099/eidiko/internal/login1', item,
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     // "Authorization":`Bearer ${localStorage.getItem("token")}`
    //                 },

    //             })
    //         .then(response => {
    //             if (response.status === 200) {
    //                 console.log('API Success:', response.data);
    //                 const apiSuccessUserName = JSON.stringify(response.data.username)
    //                 const apiSuccessUserId = JSON.stringify(response.data.userId)
    //                 // const apiSuccessToken =JSON.stringify(response.data.token)
    //                 const apiSuccessToken = response.data.token
    //                 // const userCredentialKey = [...userCredentialValues, apiSuccessUserName, apiSuccessUserId, apiSuccessToken]

    //                 localStorage.setItem('userName', apiSuccessUserName)
    //                 localStorage.setItem('userId', apiSuccessUserId)
    //                 localStorage.setItem('token', apiSuccessToken)
    //                 navigateToUserProfile()
    //             } else {
    //                 console.error('API Error:', response.statusText);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    const login =() =>{
        let item = { "userName": userName, "password": password }
        axios
        // .get("https://catfact.ninja/breeds?limit=1")
        .post("http://10.0.0.68/api/v1/mail/login", item, {
                             headers: {
                            'Content-Type': 'application/json',
            //  "Authorization":`Bearer ${localStorage.getItem("token")}`
     } })
        .then(response => {
          console.log(response)
          // Handle response
        })
    }


    return (
        <Box sx={{ width:'100%' }}>
        {/* <NavBar/> */}
        
            <Stack
                container
                direction='column'
                margin='auto'
                alignItems='center'
                justifyContent='center'
                border='2px solid grey'
                sx={{ width: '100%', height: '500px' }}
                spacing={2}
            >
             <Typography variant='h3'>EIDIKO</Typography>
                <Box>
                    {/* <Typography >UserName:</Typography> */}
                    <CustomTextField value={userName} label={"user Name"} placeholder={"userName"} onChange={(e) => handleChange(e, 'userName')} />
                </Box>
                <Box>
                    {/* <Typography alignItems='left'>Password</Typography> */}
                    <CustomTextField value={password} label={"Password"} placeholder={"Password"} type={'password'} onChange={(e) => handleChange(e, 'password')} />
                </Box>
                {/* <Button onClick={login}>Login</Button>
                <Button onClick={navigateToSignUp}>SignUP</Button> */}
                 <Button onClick={login} >Login</Button>
                <Button onClick={navigateToSignUp} >SignUP</Button>
                  
            </Stack>
        </Box>
    )
}

export default Login