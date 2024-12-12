import { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { getUserComments } from '../../utils/getUserComments';
import { IPost, PostType } from '../../types/postTypes';
import { IComment } from '../../types/commentTypes';

export const UserComments = () => {
	const user = 'leemsonn';
	const [comments, setComments] = useState<IComment[]>([]);

	useEffect(() => {
		const userPosts = async () => {
			const response: any[] = await getUserComments(user);
			setComments(response);
		};
		userPosts();
	}, []);

	return (
		<ScrollView style={{}}>
			{comments.map((comment, index) => {
				return (
					<View
						key={index}
						style={{
							paddingVertical: 5,
							borderBottomColor: 'gray',
							borderWidth: 1,
						}}>
						<Text>{comment.data.body}</Text>
					</View>
				);
			})}
		</ScrollView>
	);
};
