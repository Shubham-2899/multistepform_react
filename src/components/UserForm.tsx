import React, { ChangeEvent, useState } from 'react'
import { userDataFormat } from '../Interfaces';
import Confirm from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
import Success from './Success'


function UserForm(): JSX.Element{
    const [step,setStep]=useState(1);
    const [userData,setUserData]=useState<userDataFormat>({} as userDataFormat)

    const nextStep=()=>{
        setStep(step+1);
        // console.log("Inside the user step="+step)
      }
      const prevStep=()=>{
        setStep((prev)=>prev-1);
      }
    
      const handleChange = (input:string) => (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [input]: e.target.value });
      };
    
    switch(step){
        case 1:
            return (
                <>
                {/* console.log("inside the UserForm"); */}
                <FormUserDetails nextStep={nextStep} handleChange={handleChange}
                values={userData} setStep={setStep} step={step}/>
                </>
              )

        case 2:
            return (
                <FormPersonalDetails

                  nextStep={nextStep}
                  prevStep={prevStep}
                  values={userData}
                  handleChange={handleChange}
                  step={step}
                />
              );

        case 3:
           return <Confirm nextStep={nextStep} prevStep={prevStep} values={userData} />

        case 4:
                return <Success />
    }
    return <></>
}

export default UserForm