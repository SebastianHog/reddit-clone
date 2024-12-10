type CommentType = {
	id: number;
	body: string;
	subreddit: string;
	subreddit_name_prefixed: string;
	author: string;
	created: number;
	created_utc: number;
	permalink: string;
	score: number;
	ups: number;
	removal_reason: string;
};

export type IComment = {
	comment: CommentType;
};
