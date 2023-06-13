import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Screen2 from '../screens/Screen2';
import {HomeStackParamList} from './HomeStackParamList';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => (
	<Stack.Navigator>
		<Stack.Screen name="Screen 1" component={Home}/>
		<Stack.Screen name="Screen 2" component={Screen2}/>
	</Stack.Navigator>
);

export default HomeStack;
