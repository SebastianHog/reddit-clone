import axios, { AxiosError } from 'axios';
import { getAccessToken } from './getAccessToken';

export async function getUserComments(username: string) {
	try {
		const token = await getAccessToken();
		if (!token) {
			return console.error('No access token');
		}

		const response = await axios.get(
			`https://www.reddit.com/user/${username}/comments.json`,
		);

		if (response.data && response.data.data) {
			return response.data.data.children;
		} else {
		}
	} catch (error: AxiosError | any) {
		return error;
	}
}
