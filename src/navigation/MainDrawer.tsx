import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useSharedValue,
} from 'react-native-reanimated';

import StartBottomTab from './StartBottomTab';
import DrawerContent from '../components/DrawerContent';
import Cart from "../screens/Cart";
import Favourites from "../screens/Favourites";
import Orders from "../screens/Orders";
import {colors} from '../constants/colors';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
	const translateY = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateY: interpolate(
					translateY.value,
					[0, 1],
					[0, 50],
					Extrapolate.CLAMP,
				),
			},
		],
	}));

	return (
		<Animated.View style={[styles.container, animatedStyle]}>
			<Drawer.Navigator
				drawerContent={props => <DrawerContent {...props} />}
				screenOptions={{
					drawerActiveTintColor: colors.secondary,
					drawerActiveBackgroundColor: colors.secondaryOpacity,
					drawerInactiveTintColor: colors.white,
					drawerItemStyle: styles.drawerItemStyle,
					drawerLabelStyle: styles.drawerLabelStyle,
					drawerStyle: styles.drawerStyle,
					headerShown: false,
					overlayColor: 'transparent',
					sceneContainerStyle: styles.sceneContainerStyle,
				}}>
				<Drawer.Screen name="Start">
					{props => <StartBottomTab translateY={translateY} {...props} />}
				</Drawer.Screen>
				<Drawer.Screen name="Your Cart">
					{props => <Cart translateY={translateY} {...props} />}
				</Drawer.Screen>
				<Drawer.Screen name="Favourites">
					{props => <Favourites translateY={translateY} {...props} />}
				</Drawer.Screen>
				<Drawer.Screen name="Your Orders">
					{props => <Orders translateY={translateY} {...props} />}
				</Drawer.Screen>
			</Drawer.Navigator>
		</Animated.View>
	);
};

export default MainDrawer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	drawerItemStyle: {
		borderRadius: 10,
	},
	drawerLabelStyle: {
		fontSize: 16,
		fontWeight: '400',
		paddingLeft: 10,
	},
	drawerStyle: {
		width: 180,
	},
	sceneContainerStyle: {
		backgroundColor: colors.primary,
	},
});
