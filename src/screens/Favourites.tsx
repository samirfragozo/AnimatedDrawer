import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';
import CustomDrawerScreen from '../components/CustomDrawerScreen';
import {CustomDrawerScreenProps} from '../components/CustomDrawerScreenProps';

const Favourites: React.FC<CustomDrawerScreenProps> = ({translateY}) => (
	<CustomDrawerScreen translateY={translateY}>
		<View style={styles.container}>
			<Text>Favourites</Text>
		</View>
	</CustomDrawerScreen>
);

export default Favourites;
