import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { styles } from './styles';
import { fetchHotPosts } from '../../utils/getHotPosts';
import { FeedPostSkeleton } from '../../components/FeedPostTypes/FeedPostSkeleton/FeedPostSkeleton';
import { IPost } from '../../types/postTypes';
import { FeedImagePost } from '../../components/FeedPostTypes/FeedImagePost/FeedImagePost';
import { FeedGalleryPost } from '../../components/FeedPostTypes/FeedGalleryPost/FeedGalleryPost';

export const Feed = ({ route, navigation }: any) => {
	const [posts, setPosts] = useState<IPost[]>([]);

	useEffect(() => {
		const loadPosts = async () => {
			try {
				const data = await fetchHotPosts(route.params.subreddit.toString());
				if (data.error) throw new Error(data.error);
				setPosts(data);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};

		loadPosts();
	}, []);

	const renderSwitch = (data: any) => {
		if (!data) return <Text>NO DATA</Text>;

		switch (true) {
			case data.post_hint === 'image':
				return <FeedImagePost post={data} />;
			case data.is_video:
				return <Text>Video post</Text>;
			case data.is_gallery:
				return <FeedGalleryPost post={data} />;
			case data.crosspost_parent_list && data.crosspost_parent_list.length > 0:
				return <Text>Crosspost, I guess?</Text>;
			default:
				return;
		}
	};

	const renderItem = ({ item }: { item: any }) => (
		<FeedPostSkeleton
			post={item.data}
			navigation={navigation}
			key={item.data.id}>
			{renderSwitch(item.data)}
		</FeedPostSkeleton>
	);

	return (
		<FlatList
			style={styles.feedContainer}
			data={posts}
			keyExtractor={(item: any) => item.data.id}
			renderItem={renderItem}
			ListEmptyComponent={<Text>Loading Posts</Text>}
		/>
	);
};
