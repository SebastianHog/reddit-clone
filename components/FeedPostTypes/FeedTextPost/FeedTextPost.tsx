import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export const FeedTextPost = (post: any) => {
	console.log('text post component: ', post.post);
	return (
		<View
			style={styles.container}
			key={post.post.id}>
			<View style={styles.postHeader}>
				<Text style={styles.postSubreddit}>{post.post.subreddit}</Text>
				<Text style={{ color: 'white', marginHorizontal: 5 }}>⸱</Text>
				<Text style={styles.postAuthor}>{post.post.author}</Text>
			</View>
			<Text style={styles.postTitle}>{post.post.title}</Text>
		</View>
	);
};
