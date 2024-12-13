import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { getUserData } from '../../utils/getUserData';
import { IUser } from '../../types/userTypes';
import { UserPosts } from '../../components/UserPosts/UserPosts';
import { UserComments } from '../../components/UserComments/UserComments';
import { IPost } from '../../types/postTypes';
import { IComment } from '../../types/commentTypes';
import { getUserComments } from '../../utils/getUserComments';
import { getUserPosts } from '../../utils/getUserPosts';

export const Profile = ({ route }: any) => {
	const user = route.params;
	const [userData, setUserData] = useState<IUser>();
	const [showPosts, setShowPosts] = useState<boolean>(true);
	const [userPosts, setUserPosts] = useState<IPost[]>([]);
	const [userComments, setUserComments] = useState<IComment[]>([]);

	useEffect(() => {
		const getUserinfo = async () => {
			try {
				const data: IUser = await getUserData(user);
				const data2: IPost[] = await getUserPosts(user);
				const data3: IComment[] = await getUserComments(user);
				setUserData(data);
				setUserPosts(data2);
				setUserComments(data3);
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
					<View style={{ height: '100%' }}>
						{showPosts ? (
							<UserPosts posts={userPosts} />
						) : (
							<UserComments comments={userComments} />
						)}
					</View>
				</View>
			)}
		</View>
	);
};
