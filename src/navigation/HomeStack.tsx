import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Screen2 from '../screens/Screen2';
import React from "react";

export type HomeStackParamList = {
	'Home': undefined;
	'Screen 2': undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => (
	<Stack.Navigator>
		<Stack.Screen name="Home" component={Home}/>
		<Stack.Screen name="Screen 2" component={Screen2}/>
	</Stack.Navigator>
);

export default HomeStack;
