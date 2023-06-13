import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {StackParamList} from './StackParamList';
import {styles} from '../styles';

type Screen1Props = NativeStackScreenProps<StackParamList, 'Screen 1'>;

const Screen1: React.FC<Screen1Props> = ({navigation}) => (
	<View style={styles.container}>
		<Text>Screen 1</Text>
		<Button
			title="Go to Screen 2"
			onPress={() => navigation.navigate('Screen 2')}
		/>
	</View>
);

export default Screen1;
