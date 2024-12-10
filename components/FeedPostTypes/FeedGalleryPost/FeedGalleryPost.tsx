import { IPost } from '../../../types/postTypes';
import { Image, ScrollView, Text } from 'react-native';
import { styles } from './styles';

export const FeedGalleryPost = ({ post }: IPost) => {
	const images = post.gallery_data.items.map((imageData: any) => {
		const metadata = post.media_metadata[imageData.media_id];
		if (metadata && metadata.m.includes('png')) {
			return `https://i.redd.it/${imageData.media_id}.png`;
		} else {
			return `https://i.redd.it/${imageData.media_id}.jpg`;
		}
	});

	return (
		<>
			<Text
				style={{
					color: 'green',
					position: 'absolute',
					backgroundColor: 'darkgrey',
					borderRadius: 5,
					padding: 5,
					zIndex: 1,
					bottom: 10,
					left: 10,
				}}>
				Gallery
			</Text>
			<ScrollView
				horizontal
				style={styles.galleryContainer}
				scrollEnabled={true}
				onStartShouldSetResponderCapture={() => true}>
				{images.map((item: string, index: number) => (
					<Image
						key={index}
						source={{ uri: item }}
						style={{
							width: 300,
							height: undefined,
							aspectRatio: 1,
						}}
					/>
				))}
			</ScrollView>
		</>
	);
};
