import React from 'react';
import {SharedValue} from 'react-native-reanimated';

export interface CustomDrawerScreenProps {
	children?: React.ReactNode;
	translateY: SharedValue<number>;
}
