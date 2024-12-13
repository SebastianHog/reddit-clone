import { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { getUserPosts } from '../../utils/getUserPosts';
import { IPost, PostType } from '../../types/postTypes';
import { FeedPostSkeleton } from '../FeedPostTypes/FeedPostSkeleton/FeedPostSkeleton';
import { useNavigation } from '@react-navigation/native';
import { renderSwitch } from '../../utils/checkPostType';
import { styles } from './styles';

export const UserPosts = (userPosts: any) => {
	// console.log(userPosts.posts.length > 10 && 'posts found');
	// const user = 'leemsonn';
	const [posts, setPosts] = useState<IPost[]>([]);
	const navigation = useNavigation();

	useEffect(() => {
		setPosts(userPosts.posts);
	}, []);

	const renderItem = ({ item }: any) => (
		<FeedPostSkeleton
			post={item.data}
			navigation={navigation}
			key={item.data.id}>
			{renderSwitch(item.data)}
		</FeedPostSkeleton>
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
