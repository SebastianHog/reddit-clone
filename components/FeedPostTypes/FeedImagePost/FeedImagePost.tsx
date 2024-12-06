import { IPost } from '../../../types/postTypes';
import { Image } from 'react-native';

export const FeedImagePost = ({ post }: IPost) => {
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
