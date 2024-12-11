import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	galleryImage: {
		width: screenWidth,
		height: undefined,
		aspectRatio: 16 / 9,
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
