import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { getUserData } from '../../utils/getUserData';
import { IUser } from '../../types/userTypes';
import { UserPosts } from '../../components/UserPosts/UserPosts';
import { UserComments } from '../../components/UserComments/UserComments';

export const Profile = ({ route }: any) => {
	const user = route.params;
	const [userData, setUserData] = useState<IUser>();
	const [showPosts, setShowPosts] = useState<boolean>(true);

	useEffect(() => {
		const getUserinfo = async () => {
			try {
				const data: IUser = await getUserData(user);
				setUserData(data);
			} catch (error) {
				console.error('error getting user data: ', error);
			}
		};
		getUserinfo();
	}, []);

	const toggleShowing = (bool: boolean) => {
		setShowPosts(bool);
	};

	return (
		<View style={styles.container}>
			{!userData ? (
				<Text style={{ textAlign: 'center', fontSize: 40, color: 'white' }}>
					Loading user...
				</Text>
			) : (
				<View>
					<View style={styles.screenHeader}>
						<TouchableOpacity
							onPress={() => toggleShowing(true)}
							style={[styles.categoryContainer, showPosts && styles.selected]}>
							<Text style={styles.categoryTitle}>Post</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => toggleShowing(false)}
							style={[styles.categoryContainer, !showPosts && styles.selected]}>
							<Text style={styles.categoryTitle}>Comments</Text>
						</TouchableOpacity>
					</View>
					<View>{showPosts ? <UserPosts /> : <UserComments />}</View>
				</View>
			)}
		</View>
	);
};
