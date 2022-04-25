import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { userDataFormat } from '../Interfaces'

type Props = {
    values:userDataFormat,
    step:number,
    handleChange: (input: string) => (e: ChangeEvent<HTMLInputElement>) => void,
    nextStep: () => void
    prevStep: () => void
}

const FormPersonalDetails = ({values,step,prevStep,handleChange,nextStep}:Props) => {

    const Continue = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        nextStep();
      };
    
      const back = (e: { preventDefault: () => void }) => {
        console.log("inside the step");
        e.preventDefault();
        prevStep();
      };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Personal Details
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <TextField
        label="Occupation"
        variant="outlined"
        defaultValue={values.occupation}
        required
        onChange={handleChange('occupation')}
        margin="normal"
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="City"
        variant="outlined"
        defaultValue={values.city}
        required
        onChange={handleChange('city')}
        margin="normal" 
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Age"
        variant="outlined"
        onChange={handleChange('age')}
        defaultValue={values.age}
        required
        margin="normal"
      />
      <br />
      <br />
      <Button variant="contained" onClick={back}>
        Back
      </Button>
      <Button variant="contained" onClick={Continue}>
        Continue
      </Button>
     
    </>
  )
}

export default FormPersonalDetails