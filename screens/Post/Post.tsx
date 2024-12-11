import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { IPost } from '../../types/postTypes';
import { getPostComments } from '../../utils/getPostComments';
import { Comment } from '../../components/Comment/Comment';
import { styles } from './styles';

export const Post = ({ route }: any) => {
	const [comments, setComments] = useState<any[]>([]);
	const { post }: IPost = route.params;

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const data = await getPostComments(post);
				setComments(data);
			} catch (error) {
				console.error('Error getting comments:', error);
			}
		};

		fetchComments();
	}, [post]);

	return (
		<ScrollView style={{ backgroundColor: 'black' }}>
			<View style={styles.post}>
				<Text style={styles.postTitle}>{post.title}</Text>
				<Text style={styles.postBody}>{post.selftext}</Text>
			</View>
			<View style={styles.commentSection}>
				{comments.map((comment) => (
					<View key={comment.id}>
						<Comment
							key={comment.id}
							comment={comment}
						/>
					</View>
				))}
			</View>
		</ScrollView>
	);
};
