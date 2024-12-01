import { Text, View, Button } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const Home = ({ navigation }: any) => {
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
