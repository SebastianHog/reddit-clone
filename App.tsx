import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home/Home';
import { Header } from './components/Header/Header';
import { Feed } from './screens/Feed/Feed';
import { Post } from './screens/Post/Post';
import { Profile } from './screens/Profile/Profile';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<View
			style={{
				height: '100%',
				width: '100%',
				backgroundColor: 'gray',
			}}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerTitle: (props) => <Header {...props} />,
						headerStyle: {
							backgroundColor: 'rgb(45, 45, 45)',
						},
					}}>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{
							title: 'Home',
						}}
					/>
					<Stack.Screen
						name="Feed"
						component={Feed}
						options={({ route }) => ({
							title: 'Subreddit',
						})}
					/>
					<Stack.Screen
						name="Post"
						component={Post}
						options={({ route }) => ({
							title: 'Post title',
						})}
					/>
					<Stack.Screen
						name="Profile"
						component={Profile}
						options={{
							title: 'Profile',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}
