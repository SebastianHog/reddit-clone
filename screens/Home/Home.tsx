import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './styles';

export const Home = ({ navigation }: any) => {
	return (
		<View style={styles.home}>
			<Text style={{ textAlign: 'center' }}>Home</Text>
			<TextInput placeholder="Enter subreddit name" />
			<Button
				title="Go to subreddit"
				onPress={() => navigation.navigate('Feed')}
			/>
		</View>
	);
};
