import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	// galleryContainer: {
	// 	flexDirection: 'row',
	// 	overflow: 'scroll',
	// },
	// galleryLabel: {
	// 	color: 'green',
	// 	position: 'absolute',
	// 	backgroundColor: 'darkgrey',
	// 	borderRadius: 5,
	// 	padding: 5,
	// 	zIndex: 1,
	// 	bottom: 40,
	// 	left: 10,
	// },

	galleryImage: {
		width: screenWidth,
		height: undefined,
		aspectRatio: 2,
		objectFit: 'fill',
	},
	galleryArrowsContainer: {
		position: 'absolute',
		top: '50%',
		justifyContent: 'center',
		zIndex: 10,
		flexDirection: 'row',
		gap: screenWidth * 0.7,
	},
	galleryArrow: {
		fontSize: 30,
		backgroundColor: 'white',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
