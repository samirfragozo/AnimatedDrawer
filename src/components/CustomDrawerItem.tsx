import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {colors} from "../constants/colors";

interface CustomDrawerItemProps {
	label: string;
	navigateTo: string;
	focused: boolean;
}

const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({label, navigateTo, focused}) => {
	const navigation = useNavigation();

	return (
		<DrawerItem
			label={label}
			onPress={() => navigation.navigate(navigateTo)}
			focused={focused}
			activeBackgroundColor={colors.secondaryOpacity}
			activeTintColor={colors.secondary}
			inactiveTintColor={colors.white}
			labelStyle={styles.label}
			style={styles.label}
		/>
	);
};

export default CustomDrawerItem;

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
	},
	label: {
		fontSize: 16,
		fontWeight: '400',
		paddingLeft: 10,
	},
});
