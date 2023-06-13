// In App.js in a new project

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function Home1Screen({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Screen 1</Text>
			<Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen 2')}/>
		</View>
	);
}

function Home2Screen({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Screen 2</Text>
			<Button title="Go back" onPress={() => navigation.goBack()}/>
		</View>
	);
}

function ContactScreen() {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Contact Screen</Text>
		</View>
	);
}

function CartScreen() {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Cart Screen</Text>
		</View>
	);
}

function FavouritesScreen() {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Favourites Screen</Text>
		</View>
	);
}

function OrdersScreen() {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Orders Screen</Text>
		</View>
	);
}


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Screen 1" component={Home1Screen}/>
			<Stack.Screen name="Screen 2" component={Home2Screen}/>
		</Stack.Navigator>
	);
}

function StartTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeStack} />
			<Tab.Screen name="Contact" component={ContactScreen} />
		</Tab.Navigator>
	);
}

function MainDrawer() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Start" component={StartTabs}/>
			<Drawer.Screen name="Your Cart" component={CartScreen}/>
			<Drawer.Screen name="Favourites" component={FavouritesScreen}/>
			<Drawer.Screen name="Your Orders" component={OrdersScreen}/>
		</Drawer.Navigator>
	);
}

function App() {
	return (
		<NavigationContainer>
			<MainDrawer/>
		</NavigationContainer>
	);
}

export default App;
