import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material'
import React, { ChangeEvent, FormEvent } from 'react'
import { userDataFormat } from '../Interfaces'

type Props = {
    values:userDataFormat,
    step:number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
    handleChange: (input: string) => (e: ChangeEvent<HTMLInputElement>) => void,
    nextStep: () => void
}

const FormUserDetails = ({values,step,setStep,handleChange,nextStep}:Props) => {

    const Continue = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        nextStep();
      };
    

  return (
    <>
    {/* <Box> */}
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Enter User Details
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        defaultValue={values.firstName}
        required
        onChange={handleChange("firstName")}
        margin="normal"
      />
      <br />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        defaultValue={values.lastName}
        required
        onChange={handleChange("lastName")}
        margin="normal"
      />
      <br />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        defaultValue={values.email}
        required
        onChange={handleChange("email")}
        margin="normal"
      />
      <br />
      {/* <br /> */}
      <Button variant="contained" onClick={Continue} >
        Continue
      </Button>
      {/* </Box> */}
    </>
  )
}

export default FormUserDetails

function e(e: any): void {
    throw new Error('Function not implemented.')
}
