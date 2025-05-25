
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

export const likePost = (id)=>async (dispatch) => {
    try {
        dispatch({
            type: "likeRequest",
        });

        const {data} = await axios.get(`${API_URL}/api/v1/post/${id}`
            , {
                withCredentials: true,
              }
        );

        dispatch({
            type: "likeSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "likeFailure",
            payload: error.response.data.message,
        })
    }
}

export const addCommentOnPost = (id, comment)=>async (dispatch) => {
    try {
        dispatch({
            type: "addCommentRequest",
        });

        const {data} = await axios.put(`${API_URL}/api/v1/post/comment/${id}`,{
            comment,
        },
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "addCommentSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "addCommentFailure",
            payload: error.response.data.message,
        })
    }
}

export const deleteCommentOnPost = (id, commentId)=>async (dispatch) => {
    try {
        dispatch({
            type: "deleteCommentRequest",
        });

        const {data} = await axios.delete(`${API_URL}/api/v1/post/comment/${id}`,{
            data: {commentId},
            withCredentials: true,
              
        });

        dispatch({
            type: "deleteCommentSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "deleteCommentFailure",
            payload: error.response.data.message,
        })
    }
}

export const createNewPost = (caption, image)=> async (dispatch) => {
    try {
        dispatch({
            type: "newPostRequest",
        });

        const {data} = await axios.post(`${API_URL}/api/v1/post/upload`,{
            caption,
            image,
        },{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "newPostSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "newPostFailure",
            payload: error.response.data.message,
        })
    }
}

export const updatePost = (caption, id)=> async (dispatch) => {
    try {
        dispatch({
            type: "updateCaptionRequest",
        });

        const {data} = await axios.put(`${API_URL}/api/v1/post/${id}`,{
            caption,
        },{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "updateCaptionSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "updateCaptionFailure",
            payload: error.response.data.message,
        })
    }
}


export const deletePost = (id)=> async (dispatch) => {
    try {
        dispatch({
            type: "deletePostRequest",
        });

        const { data } = await axios.delete(`${API_URL}/api/v1/post/${id}`,
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "deletePostSuccess",
            payload: data.message,
        })
        
    } catch (error) {
        dispatch({
            type: "deletePostFailure",
            payload: error.response.data.message,
        })
    }
}