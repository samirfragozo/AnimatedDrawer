import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';
import CustomDrawerScreen from '../components/CustomDrawerScreen';
import {CustomDrawerScreenProps} from '../components/CustomDrawerScreenProps';

const Cart: React.FC<CustomDrawerScreenProps> = ({translateY}) => (
	<CustomDrawerScreen translateY={translateY}>
		<View style={styles.container}>
			<Text>Cart</Text>
		</View>
	</CustomDrawerScreen>
);

export default Cart;
