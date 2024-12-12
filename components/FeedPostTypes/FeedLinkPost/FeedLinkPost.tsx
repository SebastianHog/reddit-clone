import { Linking, Pressable, Text } from 'react-native';
import { IPost } from '../../../types/postTypes';

export const FeedLinkPost = ({ post }: IPost) => {
	return (
		<Pressable
			onPress={() => Linking.openURL(post.url)}
			style={{ width: 400 }}>
			<Text
				style={{
					color: 'lightblue',
					fontSize: 10,
					width: 400,
				}}
				numberOfLines={1}
				lineBreakMode="tail">
				{post.url}
			</Text>
		</Pressable>
	);
};
