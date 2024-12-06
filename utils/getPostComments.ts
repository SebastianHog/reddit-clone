import axios from 'axios';
import { getAccessToken } from './getAccessToken';
import { IPost } from '../types/postTypes';

export async function getPostComments(post: IPost) {
	const token = await getAccessToken();

	if (!token) {
		return console.error('No access token');
	}

	const response = await axios.get(
		`https://oauth.reddit.com/r/${post.subreddit}/comments/${post.id}.json`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				limit: 50,
			},
		},
	);

	console.log(response.data[1].data.children);
	const comments = response.data[1].data.children;

	// console.log('comments: ', comments);
	return comments.data;
}
