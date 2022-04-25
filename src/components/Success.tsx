import React from 'react'
import {
    AppBar,
    Typography,
    Toolbar,  
  } from "@mui/material";


const Success = () => {
  return (
    <>
    <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
          Success
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>Thank You For Your Submission</h1>
       <p>You will get an email with further instructions.</p>
    </>
  )
}

export default Success