import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
	comment: {
		wdith: '100%',
		backgroundColor: 'black',
		marginBottom: 10,
	},
	commentHeader: {
		backgroundColor: 'rgb(10,10,10)',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: width - 20,
	},
	commentText: {
		color: 'white',
	},
	commentScore: {
		color: 'white',
		width: 50,
		textAlign: 'center',
	},
	commentAuthor: {
		color: 'rgb(90,90,250)',
		fontWeight: 'bold',
		minWidth: 100,
		width: 'auto',
		maxWidth: 170,
	},
});
