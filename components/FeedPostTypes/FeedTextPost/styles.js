import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '90%',
		minHeight: 100,
		borderWidth: 1,
		alignSelf: 'center',
		marginBottom: 2,
		padding: 5,
	},
	postHeader: {
		flexDirection: 'row',
	},
	postSubreddit: {
		fontSize: 12,
		color: 'lightgray',
	},
	postAuthor: {
		color: 'white',
		fontSize: 12,
		color: 'lightgray',
	},
	postTitle: {
		color: 'white',
		fontSize: 16,
	},
});
