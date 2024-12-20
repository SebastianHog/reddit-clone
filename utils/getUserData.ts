import axios, { AxiosError } from 'axios';
import { getAccessToken } from './getAccessToken';

export async function getUserData(username: string) {
	try {
		const token = await getAccessToken();
		if (!token) {
			return console.error('No access token');
		}

		const response = await axios.get(
			`https://oauth.reddit.com/user/${username}/about`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		if (response.data && response.data.data) {
			return response.data.data;
		} else {
		}
	} catch (error: AxiosError | any) {
		return error;
	}
}
