import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

export const Profile = ({ route }: any) => {
	const user = route.params;
	console.log(user);

	return (
		<View style={styles.container}>
			<Text>Profile</Text>
		</View>
	);
};
