import axios from 'axios';
import { getAccessToken } from './getAccessToken';
import { IPost } from '../types/postTypes';

export async function getPostComments(post: IPost['post']) {
	try {
		const token = await getAccessToken();
		if (!token) {
			throw new Error('No access token available');
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

		if (response.data && response.data[1]) {
			const comments = response.data[1].data.children.map(
				(child: any) => child.data,
			);
			return comments;
		} else {
			throw new Error('Weird response');
		}
	} catch (error) {
		console.error('Failed to fetch posst comments:', error);
		throw error;
	}
}
