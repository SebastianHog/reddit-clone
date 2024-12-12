import axios, { AxiosError } from 'axios';
import { getAccessToken } from './getAccessToken';

export async function getUserPosts(username: string) {
	try {
		const token = await getAccessToken();
		if (!token) {
			return console.error('No access token');
		}

		const response = await axios.get(
			`https://oauth.reddit.com/user/${username}/submitted`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		if (response.data && response.data.data) {
			return response.data.data.children;
		} else {
		}
	} catch (error: AxiosError | any) {
		return error;
	}
}
