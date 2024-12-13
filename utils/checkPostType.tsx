import { IPost } from '../types/postTypes';
import { Text } from 'react-native';
import { FeedImagePost } from '../components/FeedPostTypes/FeedImagePost/FeedImagePost';
import { FeedGalleryPost } from '../components/FeedPostTypes/FeedGalleryPost/FeedGalleryPost';
import { FeedVideoPost } from '../components/FeedPostTypes/FeedVideoPost/FeedVideoPost';
import { FeedLinkPost } from '../components/FeedPostTypes/FeedLinkPost/FeedLinkPost';

export const renderSwitch = (data: IPost['post']) => {
	if (!data) return <Text> Could not get post data </Text>;

	switch (true) {
		case data.post_hint === 'image':
			return <FeedImagePost post={data} />;
		case data.is_gallery:
			return <FeedGalleryPost post={data} />;
		case data.is_video:
			return <FeedVideoPost post={data} />;
		case data.is_self:
			return (
				<Text
					style={{ color: 'white', marginTop: 5, marginBottom: 5 }}
					numberOfLines={3}>
					{data.selftext}
				</Text>
			);
		case data.crosspost_parent_list && data.crosspost_parent_list.length > 0:
			return <Text>Crosspost, implement!!!</Text>;
		case data.url.length > 1 && !data.selftext:
			return <FeedLinkPost post={data} />;

		default:
			return <Text>Could not find a post type</Text>;
	}
};
