import axios from 'axios';

const clientId = 'gtDQH2s3w0WFiAvNECq0zw';

async function getAccessToken() {
	const auth = btoa(`${clientId}:`); // Correct base64 encoding
	console.log(`Base64 Authorization Header: ${auth}`); // Debugging: Check encoded string

	try {
		const response = await axios.post(
			'https://www.reddit.com/api/v1/access_token',
			'grant_type=https://oauth.reddit.com/grants/installed_client&device_id=DO_NOT_TRACK_THIS_DEVICE',
			{
				headers: {
					Authorization: `Basic ${auth}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
		);

		console.log('Access Token Response:', response.data); // Debugging: Log API response
		if (!response.data.access_token) {
			throw new Error('Access token not found in response');
		}

		return response.data.access_token;
	} catch (error: any) {
		// Log error details
		console.error(
			'Error fetching access token:',
			error.response?.data || error.message,
		);
		throw new Error('Failed to fetch access token');
	}
}

export async function fetchHotPosts(subreddit: string) {
	try {
		const token = await getAccessToken();
		if (!token) {
			return console.error('Error: No access token available');
		}

		const response = await axios.get(
			`https://oauth.reddit.com/r/${subreddit}/hot`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					'User-Agent': 'nodejs-script',
				},
				params: {
					limit: 100,
				},
			},
		);

		if (response.data && response.data.data && response.data.data.children) {
			return response.data.data.children;
		} else {
			console.log('No posts found.');
		}
	} catch (error: any) {
		console.error(
			'Error fetching hot posts:',
			error.response?.data || error.message,
		);
	}
}
