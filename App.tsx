// In App.js in a new project

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

function Screen1({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Screen 1</Text>
			<Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen 2')}/>
		</View>
	);
}

function Screen2({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>Screen 2</Text>
			<Button title="Go back" onPress={() => navigation.goBack()}/>
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


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function StartStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Screen 1" component={Screen1}/>
			<Stack.Screen name="Screen 2" component={Screen2}/>
		</Stack.Navigator>
	);
}

function MainDrawer() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Start" component={StartStack}/>
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
