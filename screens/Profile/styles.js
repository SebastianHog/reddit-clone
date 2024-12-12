import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(55, 55, 55)',
	},
	screenHeader: {
		width: '100%',
		height: 70,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
	},
	categoryContainer: {
		flex: 1,
		textAlign: 'center',
		borderWidth: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	categoryTitle: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	},
	selected: {
		backgroundColor: 'rgb(103, 103, 103)',
	},
});
