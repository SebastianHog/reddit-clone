import { IPost } from '../../../types/postTypes';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';

export const FeedImagePost = ({ post }: IPost) => {
	const { width } = Dimensions.get('window');
	return (
		<Image
			source={{ uri: post.url }}
			style={{
				height: undefined,
				aspectRatio: 1,
			}}
		/>
	);
};
