import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { styles } from './styles';
import { getHotPosts } from '../../utils/getPostsFromSub';
import { FeedPostSkeleton } from '../../components/FeedPostTypes/FeedPostSkeleton/FeedPostSkeleton';
import { IPost } from '../../types/postTypes';
import { AxiosError } from 'axios';
import { Loader } from '../../components/Loader/Loader';
import { useNavigation } from '@react-navigation/native';
import { renderSwitch } from '../../utils/checkPostType';

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

	const renderItem = ({ item }: any, index: number) => (
		<FeedPostSkeleton
			post={item.data}
			key={index}>
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
