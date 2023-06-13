import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Contact from '../screens/Contact';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const StarTab = () => (
	<Tab.Navigator>
		<Tab.Screen name="Home" component={HomeStack}/>
		<Tab.Screen name="Contact" component={Contact}/>
	</Tab.Navigator>
);

export default StarTab;
