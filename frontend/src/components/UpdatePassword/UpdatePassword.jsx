import React, { useEffect, useState } from 'react';
import "./UpdatePassword.css";
import { Typography, Button} from "@mui/material";
import {useDispatch, useSelector} from 'react-redux';
import { updatePassword } from '../../Actions/User';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useAlert } from 'react-alert';


const UpdatePassword = () => {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const dispatch = useDispatch();
    //const alert = useAlert();

    const {loading, error, message} = useSelector((state) => state.like);
    

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(updatePassword(oldPassword, newPassword));
    }

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch({ type: "clearErrors" });
        }

        if(message){
            toast.success(message);
            dispatch({ type: "clearMessage" });
        }
    }, [dispatch, error, message]);

  return (
    <div className='updatePassword'>
        <form className="updatePasswordForm" onSubmit={submitHandler}>
            <Typography variant='h3' style={{padding: "2vmax"}}>Social App</Typography>

            <input 
            className='updatePasswordInputs'
            type="password" 
            placeholder='Old Password' 
            required 
            value={oldPassword} 
            onChange={(e)=>setOldPassword(e.target.value)}/>

            <input 
            className='updatePasswordInputs'
            type="password" 
            placeholder='New Password' 
            required 
            value={newPassword} 
            onChange={(e)=>setNewPassword(e.target.value)}/>

            <Button disabled= {loading} type='submit'>Login</Button>

        </form>
    </div>
  )
}


export default UpdatePassword