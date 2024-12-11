import React, { useEffect, useState, useRef } from 'react';
import { FlatList, Text } from 'react-native';
import { styles } from './styles';
import { fetchHotPosts } from '../../utils/getHotPosts';
import { FeedPostSkeleton } from '../../components/FeedPostTypes/FeedPostSkeleton/FeedPostSkeleton';
import { IPost } from '../../types/postTypes';
import { FeedImagePost } from '../../components/FeedPostTypes/FeedImagePost/FeedImagePost';
import { FeedGalleryPost } from '../../components/FeedPostTypes/FeedGalleryPost/FeedGalleryPost';
import { Video } from 'expo-av';

export const Feed = ({ route, navigation }: any) => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const loadPosts = async () => {
			try {
				const data = await fetchHotPosts(route.params.subreddit.toString());
				setPosts(data);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};

		loadPosts();
	}, []);

	const handlePlaybackStatusUpdate = (status: any) => {
		if (status.isLoaded && !status.isPlaying) {
			videoRef.current?.playAsync();
		}
	};

	const videoRef = useRef<Video>(null);

	const renderSwitch = (data: IPost['post']) => {
		if (!data) return <Text>NO DATA</Text>;

		switch (true) {
			case data.post_hint === 'image':
				return <FeedImagePost post={data} />;
			case data.is_gallery:
				return <FeedGalleryPost post={data} />;
			case data.is_video: {
				console.log('vid');
				const videoUrl =
					data.media?.reddit_video?.fallback_url?.split('?source=fallback')[0];
				return (
					<Video
						ref={videoRef}
						source={{ uri: videoUrl }}
						style={{
							width: '100%',
							height: 300,
						}}
						resizeMode="contain"
						onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
						isLooping
						onError={(error) => console.error('Video Error:', error)}
					/>
				);
			}
			case data.crosspost_parent_list && data.crosspost_parent_list.length > 0:
				return <Text>Crosspost, I guess?</Text>;
			default:
				return null;
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
				<Text>Loading</Text>
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
