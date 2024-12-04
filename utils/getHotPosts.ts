import axios from 'axios';

const clientId = 'QFjxSxUD0yEVvFRyyfZWhg';
const clientSecret = 'GyNhEQFd4ic89zGWxQ-IlQB2Og41NQ';

async function getAccessToken() {
	const auth = btoa(`${clientId}:${clientSecret}`);

	try {
		const response = await axios.post(
			'https://www.reddit.com/api/v1/access_token',
			'grant_type=client_credentials',
			{
				headers: {
					Authorization: `Basic ${auth}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
		);

		return response.data.access_token;
	} catch (error: any) {
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
			console.error('Error: No access token available');
			return;
		}

		const response = await axios.get(
			`https://oauth.reddit.com/r/${subreddit}/hot`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					'User-Agent': 'nodejs-script',
				},
				params: {
					limit: 25,
				},
			},
		);

		if (response.data && response.data.data && response.data.data.children) {
			return response.data.data.children;
		} else {
			console.log('No posts found.');
		}
	} catch (error: any) {
		console.log('fatty error: ', error);
		return error;
	}
}
