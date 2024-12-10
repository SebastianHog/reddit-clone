import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	home: {
		flex: 1,
		backgroundColor: 'rgb(25, 25, 25)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	subInput: {
		width: '80%',
		height: 70,
		backgroundColor: 'rgba(0,0,0,.2)',
		fontSize: 26,
		textAlign: 'center',
		color: 'white',
		borderColor: 'black',
		borderWidth: 1,
	},
	recentSubreddits: {
		width: '80%',
		marginTop: 20,
		maxHeight: 500,
		borderColor: 'black',
		backgroundColor: 'rgba(0,0,0,.2)',
		borderWidth: 1,
		borderRadius: 5,
	},
	recentSubredditsTitle: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
		marginTop: 10,
	},
	recentSubName: {
		fontWeight: 'bold',
		fontSize: 20,
		color: 'gray',
		textAlign: 'center',
	},
	recentSubLink: {
		alignSelf: 'center',
		width: '70%',
		borderWidth: 1,
		borderColor: 'gray',
		marginTop: 10,
	},
	clearRecentButton: {
		marginTop: 10,
		borderWidth: 2,
		borderColor: 'gray',
		width: 200,
		alignSelf: 'center',
	},
	clearRecentButtonText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
});
