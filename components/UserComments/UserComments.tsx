import { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { getUserComments } from '../../utils/getUserComments';
import { IPost, PostType } from '../../types/postTypes';
import { IComment } from '../../types/commentTypes';
import { Comment } from '../Comment/Comment';

export const UserComments = (userComments: any) => {
	const [comments, setComments] = useState<IComment[]>([]);

	useEffect(() => {
		setComments(userComments.comments);
	}, []);

	return (
		<ScrollView style={{}}>
			{comments.map((comment: any, index) => {
				return (
					<Comment
						comment={comment.data}
						key={index}
					/>
				);
			})}
		</ScrollView>
	);
};
