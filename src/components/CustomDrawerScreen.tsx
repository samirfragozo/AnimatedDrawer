import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';

import {CustomDrawerScreenProps} from './CustomDrawerScreenProps';
import {colors} from '../constants/colors';

const CustomDrawerScreen: React.FC<CustomDrawerScreenProps> = ({children, translateY}) => {
	const progress = useDrawerProgress();

	const animatedScreens = useAnimatedStyle(() => {
		translateY.value = progress.value;

		return {
			transform: [
				{
					translateX: interpolate(
						progress.value,
						[0, 1],
						[0, 65],
						Extrapolate.CLAMP,
					),
				},
				{
					translateY: interpolate(
						progress.value,
						[0, 1],
						[0, 10],
						Extrapolate.CLAMP,
					),
				},
				{
					rotate: `${interpolate(
						progress.value,
						[0, 1],
						[0, -10],
						Extrapolate.CLAMP,
					)}deg`,
				},
			],
		};
	});

	return (
		<Animated.View style={[styles.container, animatedScreens]}>
			{children}
		</Animated.View>
	);
};

export default CustomDrawerScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		borderRadius: 35,
		overflow: 'hidden'
	},
});
