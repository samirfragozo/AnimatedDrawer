import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {styles} from './styles';
import {HomeStackParamList} from '../navigation/HomeStack';

type Screen2Props = NativeStackScreenProps<HomeStackParamList, 'Screen 2'>;

const Screen2: React.FC<Screen2Props> = ({navigation}) => (
	<View style={styles.container}>
		<Text>Screen 2</Text>
		<Button
			title="Go Back"
			onPress={() => navigation.goBack()}
		/>
	</View>
);

export default Screen2;
