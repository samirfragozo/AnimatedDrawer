import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';
import Screen, {ScreenProps} from '../components/Screen';

const Cart: React.FC<ScreenProps> = ({translateY}) => (
	<Screen translateY={translateY}>
		<View style={styles.container}>
			<Text>Cart</Text>
		</View>
	</Screen>
);

export default Cart;
