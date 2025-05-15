import React, { useEffect, useState } from 'react';
import "./ForgotPassword.css";
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// REMOVE THIS:
// import { useAlert } from 'react-alert';

// ✅ NEW:
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { forgotPassword } from '../../Actions/User';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const { error, loading, message } = useSelector((state) => state.like);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
    };

    useEffect(() => {
        if (error) {
            toast.error(error); // ✅ replace alert.error
            dispatch({ type: "clearErrors" });
        }
        if (message) {
            toast.success(message); // ✅ replace alert.success
            dispatch({ type: "clearMessage" });
        }
    }, [error, dispatch, message]);

    return (
        <div className='forgotPassword'>
            <form className="forgotPasswordForm" onSubmit={submitHandler}>
                <Typography variant='h3' style={{ padding: "2vmax" }}>Social App</Typography>

                <input
                    type="email"
                    placeholder='Email'
                    required
                    value={email}
                    className='forgotPasswordInputs'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Button disabled={loading} type='submit'>Send Token</Button>
            </form>
        </div>
    );
};

export default ForgotPassword;
