import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home/Home';
import { Header } from './components/Header/Header';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="home"
				screenOptions={{
					headerTitle: (props) => <Header {...props} />,
					headerStyle: {
						backgroundColor: 'rgb(45,45,45)',
					},
				}}>
				<Stack.Screen
					name="home"
					component={Home}
					options={{
						title: 'Home',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
