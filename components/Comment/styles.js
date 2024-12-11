import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
	comment: {
		wdith: '100%',
		backgroundColor: '#232323',
		padding: 5,
		marginBottom: 1,
	},
	commentHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 20,
	},
	commentText: {
		color: 'white',
		fontWeight: '300',
		marginTop: 5,
	},
	commentScore: {
		color: '#ADADAD',
	},
	authorScore: {
		flexDirection: 'row',
		width: 300,
		gap: 15,
	},
	commentDate: {
		color: '#ADADAD',
	},
	commentAuthor: {
		color: '#007FFF',
		fontWeight: 'bold',
	},
});
