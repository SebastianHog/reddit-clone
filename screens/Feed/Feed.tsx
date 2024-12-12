import React, { useEffect, useState, useRef } from 'react';
import { FlatList, Text, Pressable, Linking } from 'react-native';
import { styles } from './styles';
import { getHotPosts } from '../../utils/getPostsFromSub';
import { FeedPostSkeleton } from '../../components/FeedPostTypes/FeedPostSkeleton/FeedPostSkeleton';
import { IPost } from '../../types/postTypes';
import { FeedImagePost } from '../../components/FeedPostTypes/FeedImagePost/FeedImagePost';
import { FeedGalleryPost } from '../../components/FeedPostTypes/FeedGalleryPost/FeedGalleryPost';
import { FeedVideoPost } from '../../components/FeedPostTypes/FeedVideoPost/FeedVideoPost';
import { AxiosError } from 'axios';
import { Loader } from '../../components/Loader/Loader';
import { FeedLinkPost } from '../../components/FeedPostTypes/FeedLinkPost/FeedLinkPost';
import { useNavigation } from '@react-navigation/native';

export const Feed = ({ route }: any) => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const navigation = useNavigation();

	useEffect(() => {
		const loadPosts = async () => {
			try {
				const data = await getHotPosts(route.params.data.toString());
				setPosts(data);
			} catch (error: AxiosError | any) {
				console.error('Error fetching posts', error);
			}
		};

		loadPosts();
	}, []);

	const renderSwitch = (data: IPost['post']) => {
		if (!data) return <Text>Could not get post data</Text>;

		switch (true) {
			case data.post_hint === 'image':
				return <FeedImagePost post={data} />;
			case data.is_gallery:
				return <FeedGalleryPost post={data} />;
			case data.is_video:
				return <FeedVideoPost post={data} />;
			case data.is_self:
				return <Text numberOfLines={3}>{data.selftext}</Text>;
			case data.crosspost_parent_list && data.crosspost_parent_list.length > 0:
				return <Text>Crosspost, implement!!!</Text>;
			case data.url.length > 1 && !data.selftext:
				return <FeedLinkPost post={data} />;

			default:
				return <Text>Could not find a post type</Text>;
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
		<>
			{posts.length === 0 ? (
				<Loader />
			) : (
				<FlatList
					style={styles.feedContainer}
					data={posts}
					keyExtractor={(item: any) => item.data.id}
					renderItem={renderItem}
					ListEmptyComponent={
						<Text
							style={{
								textAlign: 'center',
								fontSize: 32,
								color: 'white',
								fontWeight: '100',
							}}>
							Could not find any posts, is the subreddit name correct?
						</Text>
					}
				/>
			)}
		</>
	);
};
