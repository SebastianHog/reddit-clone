import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { IPost } from '../../types/postTypes';
import { FeedPostSkeleton } from '../FeedPostTypes/FeedPostSkeleton/FeedPostSkeleton';
import { renderSwitch } from '../../utils/checkPostType';
import { styles } from './styles';

export const UserPosts = (userPosts: { posts: IPost[] }) => {
	const [posts, setPosts] = useState<IPost[]>([]);

	useEffect(() => {
		setPosts(userPosts.posts);
	}, []);

	const renderItem = ({ item }: any) => (
		console.log(item),
		(
			<FeedPostSkeleton
				post={item.data}
				key={item.data.id}>
				{renderSwitch(item.data)}
			</FeedPostSkeleton>
		)
	);

	return (
		<View style={{ flex: 1 }}>
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
						no posts here...
					</Text>
				}
			/>
		</View>
	);
};
