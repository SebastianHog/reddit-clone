import { styles } from './styles';
import { View, Text, ScrollView, Image } from 'react-native';
import { fetchHotPosts } from '../../utils/getHotPosts';
import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { FeedPost } from '../../components/FeedPost/FeedPost';

export const Feed = () => {
	const [posts, setPosts] = useState<any[]>([]);

	useEffect(() => {
		const loadPosts = async () => {
			try {
				const data = await fetchHotPosts('minecraft');
				setPosts(data);
			} catch (error) {
				console.error('Error fetching posts:', error);
			} finally {
			}
		};

		loadPosts();
	}, []);

	return (
		<ScrollView>
			{posts.map((post) => (
				<View key={post.data.id}>
					<Text>{post.data.author}</Text>
					{post.data.post_hint === 'rich:video' ? (
						<>
							{/* <WebView
								source={{ uri: post.data.url }}
								style={{ width: '100%', height: 600 }}
							/> */}
						</>
					) : (
						<Image
							source={{ uri: post.data.url_overridden_by_dest }}
							style={{ width: '100%', height: 600 }}
							resizeMode="contain"
						/>
					)}
				</View>
			))}
		</ScrollView>
	);
};
