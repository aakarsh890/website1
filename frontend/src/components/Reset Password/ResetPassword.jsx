import React, { useEffect, useState } from 'react';
import "./ResetPassword.css";
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {useParams, Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useAlert } from 'react-alert';
import { resetPassword } from '../../Actions/User';


const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState("");
    const dispatch = useDispatch();
    //const alert = useAlert();
    const params = useParams();
    const { error, loading, message } = useSelector((state) => state.like);

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(resetPassword(params.token, newPassword));
    };

    useEffect(() => {
      if(error){
        toast.error(error);
        dispatch({ type: "clearErrors" });
    }
    if(message){
        toast.success(message);
        dispatch({ type: "clearMessage" });
    }
}, [ error, dispatch, message]);


  return (
    <div className='resetPassword'>
        <form className="resetPasswordForm" onSubmit={submitHandler}>
            <Typography variant='h3' style={{padding: "2vmax"}}>Social App</Typography>


            <input 
            className='resetPasswordInputs'
            type="password" 
            placeholder='New Password' 
            required 
            value={newPassword} 
            onChange={(e)=>setNewPassword(e.target.value)}/>

            <Link to = "/">
                <Typography>Login</Typography>
            </Link>
            <Typography>Or</Typography>

            <Link to = "/forgot/password">
                <Typography>Request Another Token!</Typography>
            </Link>

            <Button disabled={loading} type='submit'>Reset Password</Button>

        </form>
    </div>
  )
}

export default ResetPassword