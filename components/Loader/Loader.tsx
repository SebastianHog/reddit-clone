import { View } from 'react-native';
import { styles } from './styles';
import { FeedPostSkeleton } from '../FeedPostTypes/FeedPostSkeleton/FeedPostSkeleton';

export const Loader = () => {
	const skeletonCount = 10;
	return (
		<View style={styles.container}>
			{Array.from({ length: skeletonCount }).map((_, i) => {
				return <FeedPostSkeleton key={i} />;
			})}
		</View>
	);
};
