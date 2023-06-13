import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1 from '../screens/home/Screen1';
import Screen2 from '../screens/home/Screen2';
import {StackParamList} from '../screens/home/StackParamList';

const Stack = createNativeStackNavigator<StackParamList>();

const HomeStack = () => (
	<Stack.Navigator>
		<Stack.Screen name="Screen 1" component={Screen1}/>
		<Stack.Screen name="Screen 2" component={Screen2}/>
	</Stack.Navigator>
);

export default HomeStack;
