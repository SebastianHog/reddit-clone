import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './styles';
import { IPost } from '../../../types/postTypes';
import { ReactNode } from 'react';

type FeedPostSkeletonProps = {
	post: IPost['post'];
	children?: ReactNode;
	navigation: any;
};

export const FeedPostSkeleton = ({
	post,
	children,
	navigation,
}: FeedPostSkeletonProps) => {
	const navigateToPost = () => {
		navigation.navigate('Post', { post });
	};

	return (
		<TouchableWithoutFeedback>
			<TouchableOpacity
				style={styles.container}
				onPress={navigateToPost}
				activeOpacity={0.7}>
				<View style={styles.postHeader}>
					<Text style={styles.postSubreddit}>{post.subreddit}</Text>
					<Text style={{ color: 'white', marginHorizontal: 5 }}>⸱</Text>
					<Text style={styles.postAuthor}>{post.author}</Text>
				</View>
				<Text style={styles.postTitle}>{post.title}</Text>
				{children}
			</TouchableOpacity>
		</TouchableWithoutFeedback>
	);
};
