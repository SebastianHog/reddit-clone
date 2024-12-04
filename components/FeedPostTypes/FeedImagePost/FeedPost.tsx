import { styles } from './styles';
import { View, Text, Image } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { fetchHotPosts } from '../../utils/getHotPosts';

export const FeedPost = (post: any) => {
	return (
		// <View>
		// 	<Text>{post.data.author}</Text>
		// 	{post.data.post_hint === 'rich:video' ? (
		// 		<Text>Video</Text>
		// 	) : (
		// 		<Image
		// 			source={{ uri: post.data.url_overridden_by_dest }}
		// 			style={{ width: '100%', height: 600 }}
		// 			resizeMode="contain"
		// 		/>
		// 	)}
		// </View>
	);
};
