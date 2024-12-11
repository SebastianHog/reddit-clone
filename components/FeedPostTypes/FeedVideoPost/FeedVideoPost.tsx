import { IPost } from '../../../types/postTypes';
import { View, Text } from 'react-native';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';

export const FeedVideoPost = ({ post }: IPost) => {
	const videoUrl =
		post.media.reddit_video.fallback_url.split('?source=fallback')[0];

	const player = useVideoPlayer(videoUrl, (player) => {
		player.loop = true;
		player.play();
	});

	return (
		<VideoView
			player={player}
			style={{ width: '100%', aspectRatio: 16 / 9 }}
		/>
	);
};
