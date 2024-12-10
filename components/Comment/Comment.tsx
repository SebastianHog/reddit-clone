import { View, Text } from 'react-native';
import { styles } from './styles';
import { IComment } from '../../types/commentTypes';

export const Comment = ({ comment }: IComment) => {
	return (
		<View style={styles.comment}>
			<View style={styles.commentHeader}>
				<Text style={styles.commentAuthor}>{comment.author}</Text>
				<Text style={styles.commentScore}>{comment.score}</Text>
			</View>
			<Text style={styles.commentText}>{comment.body}</Text>
		</View>
	);
};
