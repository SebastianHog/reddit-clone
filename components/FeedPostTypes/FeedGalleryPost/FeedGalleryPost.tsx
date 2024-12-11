import { IPost } from '../../../types/postTypes';
import { Dimensions, View } from 'react-native';
import { Image, ScrollView, Pressable, Text } from 'react-native';
import { styles } from './styles';
import { useRef } from 'react';

export const FeedGalleryPost = ({ post }: IPost) => {
	// console.log(post.gallery_data.items[0].caption);
	const scrollViewRef = useRef(null);

	const images = post.gallery_data.items.map((imageData: any) => {
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
		console.log('Navigating gallery:', direction);
		const screenWidth = Dimensions.get('window').width;
		if (!scrollViewRef.current) return;
		scrollViewRef.current.scrollTo({
			x: direction === 'left' ? -screenWidth : +screenWidth,
		});
	};

	return (
		<>
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
				{images.map((item: any, index: number) => (
					<Image
						key={index}
						source={{ uri: item.imageUrl }}
						style={styles.galleryImage}
					/>
				))}
			</ScrollView>
		</>
	);
};
