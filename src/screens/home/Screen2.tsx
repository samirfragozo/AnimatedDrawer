import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {StackParamList} from './StackParamList';
import {styles} from '../styles';

type Screen2Props = NativeStackScreenProps<StackParamList, 'Screen 2'>;

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
