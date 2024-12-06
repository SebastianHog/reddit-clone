import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { IPost } from '../../../types/postTypes';
import { ReactNode } from 'react';

type FeedPostSkeletonProps = {
	post: IPost['post']; // Correctly referencing the `post` object from `IPost`
	children?: ReactNode;
};

export const FeedPostSkeleton = ({ post, children }: FeedPostSkeletonProps) => {
	return (
		<View
			style={styles.container}
			key={post.id}>
			<View style={styles.postHeader}>
				<Text style={styles.postSubreddit}>{post.subreddit}</Text>
				<Text style={{ color: 'white', marginHorizontal: 5 }}>⸱</Text>
				<Text style={styles.postAuthor}>{post.author}</Text>
			</View>
			<Text style={styles.postTitle}>{post.title}</Text>
			{children}
		</View>
	);
};
