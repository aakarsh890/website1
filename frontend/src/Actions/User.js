import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
//data = user,success,token
export const loginUser = (email,password)=> async(dispatch)=> {
    try {
        dispatch({
            type: "LoginRequest",
        });

        const { data } = await axios.post(`${API_URL}/api/v1/login`, { email, password }, {
            withCredentials: true,
            headers:{
                "Content-Type": "application/json",
            }
        })

        dispatch({
            type: "LoginSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "LoginFailure",
            payload: error.response.data.message,
        });   
        
    }
}

export const loadUser = ()=> async(dispatch)=> {
    try {
        dispatch({
            type: "LoadUserRequest",
        });

        const { data } = await axios.get(`${API_URL}/api/v1/me`,
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "LoadUserFailure",
            payload: error.response.data.message,
        });   
        
    }
}



export const getFollowingPosts = ()=>async (dispatch) => {
    try {
        dispatch({
            type: "postOfFollowingRequest",
        });

        const {data} = await axios.get(`${API_URL}/api/v1/posts`,
            {
                withCredentials: true,
            }
        );
        console.log("API Response:", data);

        dispatch({
            type: "postOfFollowingSuccess",
            payload: data.posts,
        })
        
    } catch (error) {
        dispatch({
            type: "postOfFollowingFailure",
            payload: error.response.data.message,
        })
    }
}

export const getMyPosts = ()=>async (dispatch) => {
    try {
        dispatch({
            type: "myPostsRequest",
        });

        const {data} = await axios.get(`${API_URL}/api/v1/my/posts`,
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "myPostsSuccess",
            payload: data.posts,
        })
        
    } catch (error) {
        dispatch({
            type: "myPostsFailure",
            payload: error.response.data.message,
        })
    }
}

export const getAllUsers = (name = "")=>async (dispatch) => {
    try {
        dispatch({
            type: "allUsersRequest",
        });

        const {data} = await axios.get(`${API_URL}/api/v1/users?name=${name}`);

        dispatch({
            type: "allUsersSuccess",
            payload: data.users,
        })
        
    } catch (error) {
        dispatch({
            type: "allUsersFailure",
            payload: error.response.data.message,
        })
    }
}

export const logoutUser = ()=> async(dispatch)=> {
    try {
        dispatch({
            type: "LogoutUserRequest",
        });

        await axios.get(`${API_URL}/api/v1/logout`,
            {
                withCredentials: true,
            }
        )

        dispatch({
            type: "LogoutUserSuccess",
        });
    } catch (error) {
        dispatch({
            type: "LogoutUserFailure",
            payload: error.response.data.message,
        });   
        
    }
}

export const registerUser = (name,email, password,avatar)=> async(dispatch)=> {
    try {
        dispatch({
            type: "RegisterRequest",
        });

        const { data } = await axios.post(`${API_URL}/api/v1/register`, { name,email, password,avatar }, {
            withCredentials: true,
            headers:{
                "Content-Type": "application/json",
            }
        })

        dispatch({
            type: "RegisterSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "RegisterFailure",
            payload: error.response.data.message,
        });   
        
    }
}


export const updateProfile = (name,email, avatar)=> async(dispatch)=> {
    try {
        dispatch({
            type: "updateProfileRequest",
        });

        const { data } = await axios.put(`${API_URL}/api/v1/update/profile`, { name,email,avatar }, {
            withCredentials: true,
            headers:{
                "Content-Type": "application/json",
            }
        })

        dispatch({
            type: "updateProfileSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "updateProfileFailure",
            payload: error.response.data.message,
        });   
        
    }
}

export const updatePassword = (oldPassword, newPassword)=> async(dispatch)=> {
    try {
        dispatch({
            type: "updatePasswordRequest",
        });

        const { data } = await axios.put(`${API_URL}/api/v1/update/password`, { oldPassword, newPassword }, {
            withCredentials: true,
            headers:{
                "Content-Type": "application/json",
            }
        })

        dispatch({
            type: "updatePasswordSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "updatePasswordFailure",
            payload: error.response.data.message,
        });   
        
    }
}

export const deleteMyProfile = ()=> async(dispatch)=> {
    try {
        dispatch({
            type: "deleteProfileRequest",
        });

        const { data } = await axios.delete(`${API_URL}/api/v1/delete/me`,
            {
                withCredentials: true,
            }
        )

        dispatch({
            type: "deleteProfileSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "deleteProfileFailure",
            payload: error.response.data.message,
        });   
    }
}

export const forgotPassword = (email)=> async(dispatch)=> {
    try {
        dispatch({
            type: "forgotPasswordRequest",
        });

        const { data } = await axios.post(`${API_URL}/api/v1/forgot/password`,{
            email
        },{
            withCredentials: true,
            headers:{
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "forgotPasswordSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "forgotPasswordFailure",
            payload: error.response.data.message,
        });   
    }
}


export const resetPassword = (token, password)=> async(dispatch)=> {
    try {
        dispatch({
            type: "resetPasswordRequest",
        });

        const { data } = await axios.put(`${API_URL}/api/v1/password/reset/${token}`,{
            password,
        },{
            withCredentials: true,
            headers:{
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "resetPasswordSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "resetPasswordFailure",
            payload: error.response.data.message,
        });   
    }
}


export const getUserPosts = (id)=>async (dispatch) => {
    try {
        dispatch({
            type: "userPostsRequest",
        });

        const { data } = await axios.get(`${API_URL}/api/v1/userposts/${id}`,
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "userPostsSuccess",
            payload: data.posts,
        })
            
    } catch (error) {
        dispatch({
            type: "userPostsFailure",
            payload: error.response.data.message,
        })
    }
}


export const getUserProfile = (id)=>async (dispatch) => {
    try {
        dispatch({
            type: "userProfileRequest",
        });

        const {data} = await axios.get(`${API_URL}/api/v1/user/${id}`,
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "userProfileSuccess",
            payload: data.user,
        })
        
    } catch (error) {
        dispatch({
            type: "userProfileFailure",
            payload: error.response.data.message,
        })
    }
}

export const followAndUnfollowUser = (id)=>async (dispatch) => {
    try {
        dispatch({
            type: "followUserRequest",
        });

        const {data} = await axios.get(`${API_URL}/api/v1/follow/${id}`,
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "followUserSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "followUserFailure",
            payload: error.response.data.message,
        })
    }
}

