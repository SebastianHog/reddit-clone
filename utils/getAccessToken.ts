import axios, { AxiosError } from 'axios';

const clientId = 'gtDQH2s3w0WFiAvNECq0zw';

export async function getAccessToken() {
	const auth = btoa(`${clientId}:`);

	try {
		const response = await axios.post(
			'https://www.reddit.com/api/v1/access_token',
			'grant_type=https://oauth.reddit.com/grants/installed_client&device_id=DO_NOT_TRACK_THIS_DEVICE',
			{
				headers: {
					Authorization: `Basic ${auth}`,
				},
			},
		);

		if (!response.data.access_token) {
			throw new Error('Access token not found in response');
		}

		return response.data.access_token;
	} catch (error: AxiosError | any) {
		console.error(error);
		throw new Error('Failed to fetch access token');
	}
}
