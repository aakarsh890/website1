import React, { useEffect, useState } from 'react'
import "./UpdateProfile.css"
import { Avatar, Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useAlert } from 'react-alert'
import { loadUser, updateProfile } from '../../Actions/User'

const UpdateProfile = () => {

    const { error, user }= useSelector((state)=>state.user);
    const {
        loading: updateLoading,
        error: updateError,
        message,
    } = useSelector((state)=> state.like);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [avatar, setAvatar] = useState("");
    const [avatarPrev, setAvatarPrev] = useState(user.avatar.url);

    const dispatch = useDispatch();

    //const alert = useAlert();
    

    const handleImageChange = (e)=>{
        const file = e.target.files[0];

        const  Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if(Reader.readyState === 2){
                setAvatarPrev(Reader.result);

                setAvatar(Reader.result);
            }
        };
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(updateProfile(name, email,avatar));
        dispatch(loadUser());
    };

    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch({ type: "clearErrors" });
        }

        if(updateError){
            toast.error(updateError);
            dispatch({ type: "clearErrors" });
        }

        if(message){
            toast.success(message);
            dispatch({ type: "clearMessage" });
        }

    }, [dispatch, error, updateError, message]);
    return (
        <div className="updateProfile">
          <form className="updateProfileForm" onSubmit={submitHandler}>
            <Typography variant="h3" style={{ padding: "2vmax" }}>
              Social Aap
            </Typography>
    
            <Avatar
              src={avatarPrev}
              alt="User"
              sx={{ height: "10vmax", width: "10vmax" }}
            />
    
            <input type="file" accept="image/*" onChange={handleImageChange} />
    
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="updateProfileInputs"
              required
              onChange={(e) => setName(e.target.value)}
            />
    
            <input
              type="email"
              placeholder="Email"
              className="updateProfileInputs"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
    
            <Button disabled={updateLoading} type="submit">
              Update
            </Button>
          </form>
        </div>
      );
    };

export default UpdateProfile