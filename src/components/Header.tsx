import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';

import {colors} from '../constants/colors';
import {DrawerNavigationProp} from "@react-navigation/drawer";

const Header = () => {
	const navigation = useNavigation<DrawerNavigationProp<any>>();
	const route = useRoute();

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={() => navigation.openDrawer()}>
				<View style={styles.hamburger}>
					<View style={styles.line}/>
					<View style={styles.line}/>
					<View style={styles.line}/>
				</View>
			</TouchableOpacity>
			<Text style={styles.title}>{route.name?.toUpperCase()}</Text>
		</SafeAreaView>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		flexDirection: 'row',
		paddingHorizontal: 16,
		paddingTop: 20,
	},
	hamburger: {
		width: 30,
	},
	line: {
		backgroundColor: 'black',
		borderRadius: 16,
		borderWidth: 1.5,
		marginVertical: 2.5,
		opacity: 0.2,
	},
	title: {
		fontSize: 22,
		fontWeight: '400',
		letterSpacing: 2,
		marginLeft: 32,
		opacity: 0.4,
	},
});
