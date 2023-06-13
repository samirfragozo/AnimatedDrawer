import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';
import Screen, {ScreenProps} from '../components/Screen';

const Orders: React.FC<ScreenProps> = ({translateY}) => (
	<Screen translateY={translateY}>
		<View style={styles.container}>
			<Text>Orders</Text>
		</View>
	</Screen>
);

export default Orders;
