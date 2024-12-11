import { View, Text } from 'react-native';
import { styles } from './styles';
import { IComment } from '../../types/commentTypes';

export const Comment = ({ comment }: IComment) => {
	return (
		<View style={styles.comment}>
			<View style={styles.commentHeader}>
				<Text style={styles.commentAuthor}>{comment.author}</Text>
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.commentScore}>
						{comment.score}
						<Text style={{ fontSize: 10 }}>pts</Text>
					</Text>
					<Text style={{ color: '#ADADAD', marginHorizontal: 5 }}>⸱</Text>
					<Text style={styles.commentDate}>14m</Text>
				</View>
			</View>
			<Text style={styles.commentText}>{comment.body}</Text>
		</View>
	);
};
