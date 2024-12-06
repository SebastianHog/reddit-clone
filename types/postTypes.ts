type PostType = {
	id: number;
	title: string;
	body?: string;
	subreddit: string;
	subreddit_name_prefixed: string;
	author: string;
	created: number;
	created_utc: number;
	domain: string;
	is_self: boolean;
	is_video: boolean;
	num_comments: number;
	permalink: string;
	score: number;
	selftext?: string;
	thumbnail?: string;
	ups: number;
	url: string;
};

export type IPost = {
	post: PostType;
};
