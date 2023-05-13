import React, { useState, useEffect } from "react";
import axios from "axios";
import { comment_url } from "../config";

const CommentList = ({ comments }) => {
	// const [commentList, setCommentList] = useState([]);
	// const config = {
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// };

	// const fetchPosts = async () => {
	// 	const response = await axios.get(
	// 		`${comment_url}/posts/${postId}/comments`,
	// 		config
	// 	);
	// 	setCommentList(response.data);
	// };
	// useEffect(() => {
	// 	fetchPosts();
	// }, []);

	const renderedComments = comments.map((comment) => {
		return (
			<li className='list-group-item' key={comment.id}>
				{comment.content}
			</li>
		);
	});

	return <ul className='list-group'>{renderedComments}</ul>;
};

export default CommentList;
