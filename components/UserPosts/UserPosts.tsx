import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { getUserPosts } from '../../utils/getUserPosts';
import { IPost, PostType } from '../../types/postTypes';

export const UserPosts = () => {
	const user = 'leemsonn';
	const [posts, setPosts] = useState<IPost[]>([]);

	useEffect(() => {
		const userPosts = async () => {
			const response: IPost[] = await getUserPosts(user);
			setPosts(response);
		};
		userPosts();
	}, []);

	return (
		<ScrollView style={{}}>
			{posts.map((post, index) => {
				return (
					<View key={index}>
						<Text
							style={{
								paddingVertical: 5,
								borderBottomColor: 'gray',
								borderWidth: 1,
							}}>
							{post.data.title}
						</Text>
					</View>
				);
			})}
		</ScrollView>
	);
};
