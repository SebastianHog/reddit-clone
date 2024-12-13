import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { IComment } from '../../types/commentTypes';
import { Comment } from '../Comment/Comment';

export const UserComments = (userComments: { comments: IComment[] }) => {
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
