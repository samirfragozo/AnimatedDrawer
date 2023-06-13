import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DrawerContentComponentProps, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../constants/colors';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.logo}>Beka</Text>
			<DrawerItemList {...props}  />
			<View style={styles.divider}/>
			<DrawerItem
				label="Sign Out"
				onPress={() => navigation.navigate('Start')}
				inactiveTintColor={colors.white}
				labelStyle={styles.drawerLabelStyle}
			/>
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
	drawerLabelStyle: {
		fontSize: 16,
		fontWeight: '400',
		paddingLeft: 10,
	},
	logo: {
		color: colors.white,
		fontSize: 24,
		fontWeight: '800',
		marginBottom: 40,
		marginLeft: 50,
	},
});
