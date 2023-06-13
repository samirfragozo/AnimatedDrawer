import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {styles} from './styles';
import {HomeStackParamList} from '../navigation/HomeStack';

type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home: React.FC<HomeProps> = ({navigation}) => (
	<View style={styles.container}>
		<Text>Screen 1</Text>
		<Button
			title="Go to Screen 2"
			onPress={() => navigation.navigate('Screen 2')}
		/>
	</View>
);

export default Home;
