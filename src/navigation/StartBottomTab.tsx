import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import Contact from '../screens/Contact';
import Screen, {ScreenProps} from '../components/Screen';

const BottomTab = createBottomTabNavigator();

const StartBottomTab: React.FC<ScreenProps> = ({translateY}) => (
	<Screen translateY={translateY}>
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}>
			<BottomTab.Screen name="HomeStack" component={HomeStack}/>
			<BottomTab.Screen name="Contact" component={Contact}/>
		</BottomTab.Navigator>
	</Screen>
);

export default StartBottomTab;
