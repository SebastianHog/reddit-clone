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
		scrollViewRef.current.scrollTo({ x: 1000, animated: true });
	};

	return (
		<>
			<View style={styles.galleryArrowsContainer}>
				<Pressable onPress={() => handleGalleryNavigation('left')}>
					<Text style={styles.galleryArrow}>◀</Text>
				</Pressable>
				<Pressable onPress={() => handleGalleryNavigation('right')}>
					{' '}
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
		// <>
		// 	<Text style={styles.galleryLabel}>Gallery</Text>
		// 	<ScrollView
		// 		horizontal
		// 		style={styles.galleryContainer}
		// 		scrollEnabled={true}
		// 		onStartShouldSetResponderCapture={() => true}>
		// 		{images.map((item: string, index: number) => (
		// 			<Image
		// 				key={index}
		// 				source={{ uri: item }}
		// 				style={{
		// 					width: 300,
		// 					height: undefined,
		// 					aspectRatio: 1,
		// 				}}
		// 			/>
		// 		))}
		// 	</ScrollView>
		// </>
	);
};
