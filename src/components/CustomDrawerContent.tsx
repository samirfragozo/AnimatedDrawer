import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';

import CustomDrawerItem from './CustomDrawerItem';
import {colors} from '../constants/colors';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.logo}>Beka</Text>
			<CustomDrawerItem label="Start" navigateTo="Start" focused={true}/>
			<CustomDrawerItem label="Your Cart" navigateTo="Your Cart" focused={false}/>
			<CustomDrawerItem label="Favourites" navigateTo="Favourites" focused={false}/>
			<CustomDrawerItem label="Your Orders" navigateTo="Your Orders" focused={false}/>
			<View style={styles.divider}/>
			<CustomDrawerItem label="Sign Out" navigateTo="Start" focused={false}/>
		</SafeAreaView>
	);
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		borderTopLeftRadius: 35,
		flex: 1,
		paddingLeft: 5,
		paddingTop: 25,
	},
	divider: {
		backgroundColor: colors.white,
		height: 1,
		marginHorizontal: 10,
		marginVertical: 40,
		opacity: 0.3,
	},
	logo: {
		color: colors.white,
		fontSize: 24,
		fontWeight: '800',
		marginBottom: 40,
		marginLeft: 50,
	},
});
