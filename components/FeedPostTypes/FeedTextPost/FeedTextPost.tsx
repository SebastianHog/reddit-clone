import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { IPost } from '../../../types/postTypes';
import { FeedPostSkeleton } from '../FeedPostSkeleton/FeedPostSkeleton';

export const FeedTextPost = ({ post }: IPost) => {
	return <FeedPostSkeleton post={post}></FeedPostSkeleton>;
};
