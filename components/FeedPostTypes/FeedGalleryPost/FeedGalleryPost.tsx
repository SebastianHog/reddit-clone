import { IPost } from '../../../types/postTypes';
import { Dimensions, View } from 'react-native';
import { Image, ScrollView, Pressable, Text } from 'react-native';
import { styles } from './styles';
import { useRef } from 'react';
import { IImage } from '../../../types/imageTypes';

export const FeedGalleryPost = ({ post }: IPost) => {
	const scrollViewRef = useRef<ScrollView>(null);

	const images = post.gallery_data.items.map((imageData: IImage) => {
		const metadata = post.media_metadata[imageData.media_id];
		if (metadata && metadata.m.includes('png')) {
			return {
				imageUrl: `https://i.redd.it/${imageData.media_id}.png`,
				imageCaption: imageData.caption ? imageData.caption : '',
			};
		} else {
			return {
				imageUrl: `https://i.redd.it/${imageData.media_id}.jpg`,
				imageCaption: imageData.caption ? imageData.caption : '',
			};
		}
	});

	const handleGalleryNavigation = (direction: string) => {
		const screenWidth = Dimensions.get('window').width;
		if (!scrollViewRef.current) return;
		scrollViewRef.current.scrollTo({
			x: direction === 'left' ? -screenWidth : +screenWidth,
		});
	};

	return (
		<View>
			<View style={styles.galleryArrowsContainer}>
				<Pressable onPress={() => handleGalleryNavigation('left')}>
					<Text style={styles.galleryArrow}>◀</Text>
				</Pressable>
				<Pressable onPress={() => handleGalleryNavigation('right')}>
					<Text style={styles.galleryArrow}>▶</Text>
				</Pressable>
			</View>
			<ScrollView
				ref={scrollViewRef}
				style={{ flexDirection: 'row' }}
				horizontal>
				{images.map((item: IImage) => (
					<Image
						key={item.media_id || item.id}
						source={{ uri: item.imageUrl }}
						style={styles.galleryImage}
					/>
				))}
			</ScrollView>
		</View>
	);
};
