import { styles } from './styles';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import { fetchHotPosts } from '../../utils/getHotPosts';
import React, { useEffect, useState } from 'react';
import { FeedTextPost } from '../../components/FeedPostTypes/FeedTextPost/FeedTextPost';
import { IPost } from '../../types/postTypes';
import { FeedPostSkeleton } from '../../components/FeedPostTypes/FeedPostSkeleton/FeedPostSkeleton';

export const Feed = ({ route }: any) => {
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
				return (
					<Image
						source={{ uri: data.url }}
						style={{
							height: undefined,
							aspectRatio: 1,
						}}
					/>
				);
			case data.is_video: // VIDEO IS ANNOYING TO MAKE I DO THIS AT THE END
				return <Text>Video post</Text>;
			case data.is_gallery:
				// Gallery images are in data.gallery_data.items[x].media_id
				return <Text>Gallery post</Text>;
			case data.crosspost_parent_list && data.crosspost_parent_list.length > 0:
				return <Text>Crosspost, I guess?</Text>;
			case data.post_hint === 'self' || data.is_self:
				return <FeedTextPost post={data} />;
			default:
				// console.log('default case: ', data);
				return;
		}
	};

	const renderItem = ({ item }: { item: any }) => (
		<FeedPostSkeleton
			post={item.data}
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
