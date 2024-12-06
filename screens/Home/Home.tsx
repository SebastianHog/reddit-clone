import { Text, View, Button } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';

export const Home = ({ navigation }: any) => {
	const REDIRECT_URI = 'exp://192.168.1.17:8081';
	const RANDOM_STRING = 'randomestringhere';
	const CLIENT_ID = 'gtDQH2s3w0WFiAvNECq0zw';

	return (
		<View style={styles.home}>
			<Text style={{ textAlign: 'center' }}>Home</Text>
			<Button
				title="Go to Feed"
				onPress={() => navigation.navigate('Feed')}
			/>
		</View>
	);
};
