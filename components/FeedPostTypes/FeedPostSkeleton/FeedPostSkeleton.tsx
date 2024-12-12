import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Pressable,
} from 'react-native';
import { styles } from './styles';
import { IPost } from '../../../types/postTypes';
import { ReactNode } from 'react';
import { navigateTo } from '../../../utils/navigateToScreen';
import { useNavigation } from '@react-navigation/native';

type FeedPostSkeletonProps = {
	post?: IPost['post'];
	children?: ReactNode;
	navigation?: any;
};

export const FeedPostSkeleton = ({ post, children }: FeedPostSkeletonProps) => {
	const author = post?.author;
	const navigation = useNavigation();

	return (
		<TouchableWithoutFeedback>
			<TouchableOpacity
				style={[
					styles.container,
					post!?.stickied && {
						borderColor: 'green',
						borderWidth: 2,
						marginBottom: 20,
					},
				]}
				onPress={() => navigateTo('Post', navigation, { post })}
				activeOpacity={0.7}>
				<View style={styles.postHeader}>
					<Text style={styles.postSubreddit}>{post!?.subreddit}</Text>
					<Text style={{ color: 'white', marginHorizontal: 5 }}>⸱</Text>
					<TouchableOpacity
						onPress={() => navigateTo('Profile', navigation, { author })}>
						<Text style={styles.postAuthor}>{author}</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.postTitle}>{post!?.title}</Text>
				{children}
				<View style={styles.postFooterInfo}>
					<View style={styles.footerInfoContainer}>
						<Text style={{ height: 20, flexDirection: 'column' }}>
							{post!?.ups}
							<Text style={{ fontSize: 10, height: 20 }}>pts</Text>
						</Text>
					</View>
					<View style={styles.footerInfoContainer}>
						<Text style={{ height: 20, flexDirection: 'column' }}>
							{post!?.num_comments}
							<Text style={{ fontSize: 10, height: 20 }}>comments</Text>
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</TouchableWithoutFeedback>
	);
};
