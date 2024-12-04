import { styles } from './styles';
import { View, Text, ScrollView, Image } from 'react-native';
import { fetchHotPosts } from '../../utils/getHotPosts';
import React, { useEffect, useState } from 'react';
import { FeedTextPost } from '../../components/FeedPostTypes/FeedTextPost/FeedTextPost';
import { WebView } from 'react-native-webview';

export const Feed = () => {
	const [posts, setPosts] = useState<any[]>([]);

	useEffect(() => {
		const loadPosts = async () => {
			try {
				const data = await fetchHotPosts('askreddit');
				if (data.error) throw new Error(data.error);
				setPosts(data);
			} catch (error) {
				console.error('Error fetching posts:', error);
			} finally {
			}
		};

		loadPosts();
	}, []);

	const renderSwitch = (data: any) => {
		if (!data) return <Text>NO DATA</Text>;
		switch (true) {
			case data.post_hint === 'image':
				return <Text>{data.title}</Text>;
			case data.post_hint === 'rich:video':
				return <Text>{data.title}</Text>;
			case data.is_gallery:
				return <Text>{data.title}</Text>;
			case data.crosspost_parent_list && data.crosspost_parent_list.length > 0:
				return <Text>{data.title}</Text>;
			case data.post_hint === 'self' || data.is_self:
				return <FeedTextPost post={data} />;
			default:
				console.log(data);
				return <Text>{data.title} DEFAULT</Text>;
		}
	};

	return (
		<ScrollView style={styles.feedContainer}>
			{posts.length < 1 ? (
				<Text>Loading Posts</Text>
			) : (
				posts.map((post: any) => {
					return <View>{renderSwitch(post.data)}</View>;
				})
			)}
		</ScrollView>
	);
};
