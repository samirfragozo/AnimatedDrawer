import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import Contact from '../screens/Contact';
import CustomDrawerScreen from '../components/CustomDrawerScreen';
import {CustomDrawerScreenProps} from '../components/CustomDrawerScreenProps';

const BottomTab = createBottomTabNavigator();

const StartBottomTab: React.FC<CustomDrawerScreenProps> = ({translateY}) => (
	<CustomDrawerScreen translateY={translateY}>
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}>
			<BottomTab.Screen name="Home" component={HomeStack}/>
			<BottomTab.Screen name="Contact" component={Contact}/>
		</BottomTab.Navigator>
	</CustomDrawerScreen>
);

export default StartBottomTab;
