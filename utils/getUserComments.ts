import axios, { AxiosError } from 'axios';
import { getAccessToken } from './getAccessToken';

export async function getUserComments(username: string) {
	console.log('Getting user comments');
	try {
		const token = await getAccessToken();
		if (!token) {
			return console.error('No access token');
		}

		const response = await axios.get(
			`https://www.reddit.com/user/${username}/comments.json`,
			{
				params: {
					limit: 100,
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
