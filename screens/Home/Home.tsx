import {
	Text,
	View,
	TextInput,
	Pressable,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { navigateTo } from '../../utils/navigateToScreen';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
	const [subreddit, setSubreddit] = useState<string>('');
	const [recentSubs, setRecentSubs] = useState<string[]>([]);

	const navigation = useNavigation();

	useEffect(() => {
		const getRecentSubs = async () => {
			const recentlyViewed = await AsyncStorage.getItem('recentlyViewed');
			if (recentlyViewed) setRecentSubs(JSON.parse(recentlyViewed));
		};
		getRecentSubs();
	}, []);

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

			navigateTo('Feed', navigation, subreddit);
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
								onPress={() => navigateTo('Feed', navigation, subreddit)}>
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
			<TouchableOpacity
				onPress={() =>
					navigateTo('Profile', navigation, { author: 'Leemsonn' })
				}>
				<Text
					style={{
						backgroundColor: 'red',
						height: 50,
						width: 200,
						textAlign: 'center',
						fontSize: 30,
					}}>
					Go to profile
				</Text>
			</TouchableOpacity>
		</View>
	);
};
