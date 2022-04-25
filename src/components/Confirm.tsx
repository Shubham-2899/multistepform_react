import { AppBar, Button, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { userDataFormat } from '../Interfaces'

type Props = {
    nextStep: () => void,
    prevStep: () => void,
    values: userDataFormat
}

const Confirm = ({nextStep,prevStep,values}:Props) => {

    const { firstName, lastName, email, occupation, city, age } = values;


    const Continue = (e: { preventDefault: () => void }) => {
        // e.preventDefault();
        nextStep();
      };
    
      const back = (e: { preventDefault: () => void }) => {
        console.log("inside the step");
        // e.preventDefault();
        prevStep();
      };

  return (
    <>
     <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
          Check your information
          </Typography>
        </Toolbar>
      </AppBar>
        <List>
        <ListItem>
          <ListItemText primary='First Name' secondary={firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Last Name' secondary={lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Email' secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Occupation' secondary={occupation} />
        </ListItem>
        <ListItem>
          <ListItemText primary='City' secondary={city} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Age' secondary={age} />
        </ListItem>
      </List>
      <Button
              variant="contained"
              onClick={back}
            >Back</Button>

            <Button
              variant="contained"
              onClick={Continue}
            >Confirm & Continue</Button>
      </>
  )
}

export default Confirm