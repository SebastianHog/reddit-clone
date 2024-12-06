import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { IPost } from '../../../types/postTypes';

export const FeedTextPost = ({ post }: IPost) => {
	return <Text style={{ color: 'white' }}>{post.selftext}</Text>;
};
