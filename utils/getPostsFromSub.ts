import axios, { AxiosError } from 'axios';
import { getAccessToken } from './getAccessToken';

export async function getHotPosts(subreddit: string) {
	try {
		const token = await getAccessToken();
		if (!token) {
			return console.error('No access token');
		}

		const response = await axios.get(
			`https://oauth.reddit.com/r/${subreddit}/hot`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params: {
					limit: 100,
				},
			},
		);

		if (response.data && response.data.data && response.data.data.children) {
			return response.data.data.children;
		} else {
		}
	} catch (error: AxiosError | any) {
		return error;
	}
}
