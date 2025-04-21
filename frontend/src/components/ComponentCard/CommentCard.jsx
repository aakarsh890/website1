import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import "./CommentCard.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentOnPost } from "../../Actions/Post";
import { getFollowingPosts, getMyPosts } from "../../Actions/User";

const CommentCard = ({ userId, name, avatar, comment, commentId, postId, isAccount }) => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const deleteCommentHandle = async () => {
        await dispatch(deleteCommentOnPost(postId, commentId));
        if (isAccount) {
            dispatch(getMyPosts());
        } else {
            dispatch(getFollowingPosts());
        }
    };

    return (
        <div className="commentUser">
            <Link to={`/user/${userId}`}>
                <img src={avatar} alt={name} />
                <Typography style={{ minWidth: "6vmax" }}>{name}</Typography>
            </Link>
            <Typography>{comment}</Typography>

            {isAccount || userId === user._id ? (
                <Button onClick={deleteCommentHandle}>
                    <Delete />
                </Button>
            ) : null}
        </div>
    );
};

export default CommentCard;
