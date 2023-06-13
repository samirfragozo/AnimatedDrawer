import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';
import Screen, {ScreenProps} from '../components/Screen';

const Favourites: React.FC<ScreenProps> = ({translateY}) => (
	<Screen translateY={translateY}>
		<View style={styles.container}>
			<Text>Favourites</Text>
		</View>
	</Screen>
);

export default Favourites;
