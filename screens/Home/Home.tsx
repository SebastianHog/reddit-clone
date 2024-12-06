import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export const Home = ({ navigation }: any) => {
	const [subreddit, setSubreddit] = useState<string>('');

	const setNewSubreddit = (text: string) => {
		setSubreddit(text.trim());
	};

	return (
		<View style={styles.home}>
			<Text style={{ textAlign: 'center' }}>{subreddit}</Text>
			<TextInput
				placeholder="Enter subreddit name"
				style={styles.subInput}
				onChangeText={(text) => setNewSubreddit(text)}
			/>
			<Button
				title="Go to subreddit"
				onPress={() => navigation.navigate('Feed', { subreddit })}
			/>
		</View>
	);
};
