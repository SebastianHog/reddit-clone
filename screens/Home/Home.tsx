import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { useEffect, useState } from 'react';

export const Home = ({ navigation }: any) => {
	const [subreddit, setSubreddit] = useState<string>('');
	const [recentSubs, setRecentSubs] = useState<string[]>([]);

	useEffect(() => {
		const getRecentSubs = async () => {
			const recentlyViewed = await AsyncStorage.getItem('recentlyViewed');
			if (recentlyViewed) setRecentSubs(JSON.parse(recentlyViewed));
		};
		getRecentSubs();
	}, []);

	const goToSub = (subreddit: string) => {
		navigation.navigate('Feed', { subreddit });
	};

	const AddToRecentNavigate = async () => {
		const recentlyViewed = await AsyncStorage.getItem('recentlyViewed');
		try {
			const currentRecent = recentlyViewed ? JSON.parse(recentlyViewed) : [];
			if (currentRecent.includes(subreddit.toLowerCase()))
				currentRecent.splice(currentRecent.indexOf(subreddit.toLowerCase()), 1);

			currentRecent.push(subreddit.toLowerCase());

			await AsyncStorage.setItem(
				'recentlyViewed',
				JSON.stringify(currentRecent),
			);

			setRecentSubs(currentRecent);

			goToSub(subreddit);
		} catch (error) {
			console.error('Error handling subreddit visit:', error);
		}
	};

	const clearRecentSubs = async () => {
		setRecentSubs([]);
		await AsyncStorage.removeItem('recentlyViewed');
	};

	return (
		<View style={styles.home}>
			<TextInput
				placeholder="Subreddit"
				style={styles.subInput}
				placeholderTextColor={'rgba(200, 200, 200, 0.6)'}
				onChangeText={(text) => setSubreddit(text.trim())}
				onSubmitEditing={() => AddToRecentNavigate()}
			/>
			<ScrollView style={styles.recentSubreddits}>
				<Text style={styles.recentSubredditsTitle}>You recently visited</Text>
				<View style={{ flexDirection: 'column-reverse' }}>
					{recentSubs.map((subreddit) => {
						return (
							<Pressable
								key={subreddit}
								style={styles.recentSubLink}
								onPress={() => goToSub(subreddit)}>
								<Text style={styles.recentSubName}>{subreddit}</Text>
							</Pressable>
						);
					})}
				</View>
			</ScrollView>
			<Pressable
				onPress={() => clearRecentSubs()}
				style={styles.clearRecentButton}>
				<Text style={styles.clearRecentButtonText}>Clear recent</Text>
			</Pressable>
		</View>
	);
};
