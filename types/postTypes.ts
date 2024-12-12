export type PostType = {
	id: number;
	title: string;
	body: string;
	subreddit: string;
	subreddit_name_prefixed: string;
	author: string;
	created: number;
	created_utc: number;
	domain: string;
	is_self: boolean;
	is_video: boolean;
	is_gallery: boolean;
	post_hint: string;
	num_comments: number;
	permalink: string;
	score: number;
	selftext?: string;
	thumbnail?: string;
	ups: number;
	url: string;
	gallery_data: any;
	media_metadata: any;
	crosspost_parent_list: any;
	stickied: boolean;
	media: {
		reddit_video: {
			fallback_url: string;
		};
	};
};

export type IPost = {
	post: PostType;
};
