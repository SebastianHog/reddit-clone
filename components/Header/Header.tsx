import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';

type HeaderProps = {
	children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
	return (
		<View style={styles.header}>
			<Text style={[styles.headerContainer, styles.headerTitle]}>
				{children}
			</Text>
		</View>
	);
};
