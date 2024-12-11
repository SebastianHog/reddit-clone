import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home/Home';
import { Header } from './components/Header/Header';
import { Feed } from './screens/Feed/Feed';
import { Post } from './screens/Post/Post';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
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
						title: route.params?.subreddit,
					})}
				/>
				<Stack.Screen
					name="Post"
					component={Post}
					options={({ route }) => ({
						title: route.params?.post.title,
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
